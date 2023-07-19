import '../CSS/registration.css'
import '../UI/CSS/textBox.css'
import '../UI/CSS/redBtn.css'
// import Header from '../SECTIONS/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Footer from '../SECTIONS/Footer';
import RedButton from '../UI/RedButton';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Registration({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth)
    const navigate = useNavigate();
    if (auth) {
        navigate('/book-listing');
    }
    const [roles, changeRoles] = useState([]);
    useEffect(() => {
        axios.get(`${baseUrl}/api/user/roles`)
            .then(data => {
                return data.data;
            })
            .then(data => {
                if (data.code === 200) {
                    var tempArr = []
                    tempArr.push(data.result[0])
                    tempArr.push(data.result[1])
                    changeRoles(tempArr);
                }
            })
    }, [])
    const [myRole, changeMyRole] = useState(-1)
    const [myRoleVal, changeRoleVal] = useState(true)

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

    const check_form_val = () => {
        if (fnameVal && lnameVal && emailVal && pwVal && cPwVal && myRoleVal) {
            return true;
        }
        else {
            return false;
        }
    }
    const check_role_val = () => {
        if (myRole == -1) {
            return false;
        } else {
            return true;
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
        if (cPassword.trim().length < 1) {
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
    }, [fnameVal, lnameVal, emailVal, pwVal, cPwVal, myRoleVal])

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
    useEffect(() => {
        changeRoleVal(check_role_val);
    }, [myRole])
    const submitForm = (e) => {
        e.preventDefault();
        if (!check_fname_val || !check_lname_val || !check_email_val || !check_password_val || !check_cPassword_val || !check_role_val) {
            changeFormVal(false);
            if (!check_fname_val) { changeFnameVal(false) }
            else if (!check_lname_val) { changeLnameVal(false) }
            else if (!check_email_val) { changeEmailVal(false) }
            else if (!check_password_val) { changePwVal(false) }
            else if (!check_cPassword_val) { changeCPwVal(false) }
            else if (!check_role_val) { changeRoleVal(false) }
            return
        }
        let user = {
            firstName: fname,
            lastName: lname,
            email: email,
            roleId: myRole,
            password: password,
        }

        axios.post(`${baseUrl}/api/user`, user)
            .then(res => {
                return res.data
            })
            .then((data) => {
                if (data.code == 200) {
                    toast.success("Registration sucessfull!");
                    setTimeout(() => {
                        navigate('login')
                    }, 1000);
                }
            })
            .catch(err => {
                toast.error(err.response.data.error);
            })
    }

    return (
        <>
            {/* <Header /> */}

            <div className='reg-container'>
                <div className='reg-login-heading'>
                    <span>Login or Create an Account</span>
                </div>
                <div className='reg-sub-heading'>
                    <span className='reg-info'>Personal Information </span>
                    <hr></hr>
                    <span className='reg-instructions'>Please enter the following information to create your account</span>
                </div>
                <div className='reg-login-container'>
                    <form className='reg-login-form'>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> First Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="fname">First Name</label>
                                <input type="text" required id='fname' className={fnameVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => setFname(e.target.value)} ></input>
                                {!fnameVal && <p className='reg-p'>First name must be minimum 5 characters long</p>}
                            </div>
                            {/* ->>>>>>>>> Last Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="lname">Last Name</label>
                                <input type="text" required onChange={(e) => setLname(e.target.value)} id='lname' className={lnameVal ? 'textBox' : 'textBox red-textBox'}></input>
                                {!lnameVal && <p className='reg-p'>Last name must be minimum 5 characters long</p>}
                            </div>
                        </div>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> Email section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="email">Email Address</label>
                                <input type="text" required onChange={(e) => setEmail(e.target.value)} id='email' className={emailVal ? 'textBox' : 'textBox red-textBox'}></input>
                                {!emailVal && <p className='reg-p'>Email must be a valid email</p>}
                            </div>
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="email">Role</label>
                                {/* <input type="text" onChange={(e) => setEmail(e.target.value)} id='email' className={emailVal ? 'textBox' : 'textBox red-textBox'}></input> */}
                                <select id='role' required name='role' className={myRoleVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => changeMyRole(e.target.value)} defaultValue={-1}>
                                    <option value={-1}>Please select a role</option>
                                    {roles.map(role => {
                                        return (
                                            <option key={role.id} value={role.id}>{role.name}</option>
                                        )
                                    })}
                                </select>
                                {!myRoleVal && <p className='reg-p'>Any one role must be selected</p>}
                            </div>
                        </div>
                        <div className='reg-sub-heading' id='reg-login'>
                            <span className='reg-info'>Login Information</span>
                            <hr></hr>
                        </div>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> Password section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="password">Password</label>
                                <input type="password" required onChange={(e) => setPassword(e.target.value)} id='password' className={pwVal ? 'textBox password' : 'textBox red-textBox password'}></input>
                                {!pwVal && <p className='reg-p'>password must be minimum 5 characters long</p>}
                            </div>
                            {/* ->>>>>>>>> Re-Password section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="re-password">Confirm Password</label>
                                <input type="password" required onChange={(e) => setCPassword(e.target.value)} id='re-password' className={cPwVal ? 'textBox' : 'textBox red-textBox'}></input>
                                {!cPwVal && <p className='reg-p'>Passwords should be matched</p>}
                            </div>
                        </div>
                        <div className='reg-holder'>
                            <button disabled={!formVal} type='submit' className={formVal ? 'redBtn' : 'disabledBtn'} onClick={submitForm}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr></hr>
            {/* <Footer /> */}
        </>
    )
}
export default Registration;