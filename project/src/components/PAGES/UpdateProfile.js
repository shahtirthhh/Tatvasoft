import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bookActions } from '../../redux-store/books-slice';
// admin@tatvasoft.com
// admin@123
import '../CSS/editProduct.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/redBtn.css';
import '../UI/CSS/greenBtn.css';
import Spinner from '../UI/Spinner';
import { toast } from 'react-toastify';


function UpdateProfile({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }
    const [isLoading, setLoading] = useState(false);

    const [fname, setFname] = useState("")
    const [fnameVal, changeFnameVal] = useState(true)

    const [lname, setLname] = useState("")
    const [lnameVal, changeLnameVal] = useState(true)

    const [email, setEmail] = useState("")
    const [emailVal, changeEmailVal] = useState(true)

    const [password, setPassword] = useState("")
    const [pwVal, changePwVal] = useState(true)

    const [cPassword, setCPassword] = useState("")
    const [cPwVal, changeCPwVal] = useState(true)

    const [formVal, changeFormVal] = useState(true)

    const [otherData, changeData] = useState({})

    useEffect(() => {
        const me = JSON.parse(localStorage.getItem('user'))
        setFname(me.firstName)
        setLname(me.lastName)
        setEmail(me.email)
        setPassword(me.password)
        setCPassword(me.password)
        changeData({
            id: me.id,
            role: me.role,
            roleId: me.roleId,
            __v: me.__v,
            _id: me._id
        })
    }, [])
    const check_form_val = () => {
        if (fnameVal && lnameVal && emailVal && pwVal && cPwVal) {
            return true;
        }
        else {
            return false;
        }
    }
    const check_lname_val = () => {
        if (lname.trim().length < 4) {
            changeFormVal(false)
            return false;
        } else {
            return true;
        }
    }
    const check_fname_val = () => {
        if (fname.trim().length < 4) {
            changeFormVal(false)
            return false;
        } else {
            return true;
        }
    }
    const check_email_val = () => {
        if (email.trim().length < 1) {
            changeFormVal(false)
            return false;
        }
        else if (!email.includes("@")) {
            changeFormVal(false)
            return false;
        }
        else {
            return true
        }
    }
    const check_password_val = () => {
        if (password.trim().length < 5) {
            changeFormVal(false)
            return false;
        } else {
            return true;
        }
    }
    const check_cPassword_val = () => {
        if (cPassword.trim().length < 5) {
            changeFormVal(false)
            return false;
        } else if (cPassword !== password) {
            changeFormVal(false)
            return false;
        }
        else {
            return true;
        }
    }
    useEffect(() => {
        changeFormVal(check_form_val);
    }, [fnameVal, lnameVal, emailVal, pwVal, cPwVal])

    useEffect(() => {
        changeLnameVal(check_lname_val)
    }, [lname])
    useEffect(() => {
        changeFnameVal(check_fname_val)
    }, [fname])
    useEffect(() => {
        changeEmailVal(check_email_val)
    }, [email])
    useEffect(() => {
        changePwVal(check_password_val)
    }, [password])
    useEffect(() => {
        changeCPwVal(check_cPassword_val)
    }, [cPassword, password])


    const submitEditedHandler = (e) => {
        e.preventDefault();
        const update = {
            id: otherData.id,
            email: email,
            firstName: fname,
            lastName: lname,
            roleId: otherData.roleId,
            role: otherData.role,
            password: password,
            // _id: otherData._id,
            // __v: otherData.__v

        }
        // console.log(update)
        update_profile(update);
    }
    const update_profile = (formData) => {
        setLoading(true)
        // console.log(formData)
        axios.put(`${baseUrl}/api/user`, formData)
            .then(result => {
                return result.data
            }).then(data => {
                setLoading(false)
                toast.success("Updated successfully");
                localStorage.setItem('user', JSON.stringify(data.result))
                navigate('/book-listing')
            })
            .catch(err => {
                setLoading(false)
                toast.error("Can't update ! Server error");
            })
    }


    return (
        <>
            {isLoading ? <Spinner /> : <></>}
            <div className='edit-product-heading'>
                <span>Update Profile</span>
            </div>
            <div className='reg-container'>
                <div className='reg-login-container'>
                    <form className='reg-login-form'>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> First Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="name">First Name</label>
                                <input type="text" id='name' defaultValue={fname} className={fnameVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => setFname(e.target.value)} ></input>
                                {!fnameVal && <p className='reg-p'>First name must be minimum 5 characters long</p>}
                            </div>
                            {/* ->>>>>>>>> Last Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="lname">Last Name</label>
                                <input type="text" defaultValue={lname} onChange={(e) => setLname(e.target.value)} id='lname' className={lnameVal ? 'textBox' : 'textBox red-textBox'}></input>
                                {!lnameVal && <p className='reg-p'>Last name must be minimum 5 characters long</p>}
                            </div>
                        </div>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> Email section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="email">Email</label>
                                <input type="email" id='email' defaultValue={email} className={emailVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => setEmail(e.target.value)} ></input>
                                {!emailVal && <p className='reg-p'>Email must be a valid email</p>}
                            </div>
                            {/* ->>>>>>>>> Password section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="password">Password</label>
                                <input type="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} id='password' className={pwVal ? 'textBox' : 'textBox red-textBox'}></input>
                                {!pwVal && <p className='reg-p'>password must be minimum 5 characters long</p>}
                            </div>
                        </div>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> confirm Password section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="cPassword">Confirm Password</label>
                                <input type="password" defaultValue={cPassword} onChange={(e) => setCPassword(e.target.value)} id='cPassword' className={cPwVal ? 'textBox' : 'textBox red-textBox'}></input>
                                {!cPwVal && <p className='reg-p'>Passwords should be matched</p>}
                            </div>
                        </div>
                        <div className='reg-holder'>
                            <button disabled={!formVal} type='submit' className={formVal ? 'greenBtn' : 'disabledBtn'} onClick={e => submitEditedHandler(e)}>Save</button>
                            <Link to='/book-listing'><button style={{ margin: "0vw 1.7vw 0vw 1vw" }} className='redBtn'>Cancel</button></Link>
                        </div>
                    </form>
                </div >
            </div >
            <hr></hr>
        </>
    )
}

export default UpdateProfile