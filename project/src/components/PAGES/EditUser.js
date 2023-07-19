import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// admin@tatvasoft.com
// admin@123
import '../CSS/editProduct.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/redBtn.css';
import '../UI/CSS/greenBtn.css';
import Spinner from '../UI/Spinner';
import { toast } from 'react-toastify';
function EditUser({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }
    const [isLoading, setLoading] = useState(false);
    const [roles, setRoles] = useState([]);

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const { user_id } = useParams()
    // console.log(user_id)
    // console.log(users)
    const user_index = (users.findIndex((user) => user.id == user_id))
    let ME = users[user_index]// const my_product = 

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseUrl}/api/user/roles`)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                setRoles(data.result)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                toast.error(err.response.data.error);
            })
    }, [])
    const check_form_val = () => {
        if (fnameVal && lnameVal && emailVal) {
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
    const check_role_val = () => {
        if (myRole == -1) {
            return false;
        } else {
            return true;
        }
    }
    const [fname, setFname] = useState(ME.firstName)
    const [fnameVal, changeFnameVal] = useState(true)

    const [lname, setLname] = useState(ME.lastName)
    const [lnameVal, changeLnameVal] = useState(true)

    const [email, setEmail] = useState(ME.email)
    const [emailVal, changeEmailVal] = useState(true)

    const [myRole, changeMyRole] = useState(ME.roleId)
    const [myRoleVal, changeRoleVal] = useState(true)

    const [formVal, changeFormVal] = useState(true)
    useEffect(() => {
        changeFormVal(check_form_val);
    }, [fnameVal, lnameVal, emailVal, myRoleVal])

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
        changeRoleVal(check_role_val);
    }, [myRole])

    const submitEditedHandler = (e) => {
        e.preventDefault();
        var temp = roles.filter(role => role.id == myRole)
        // console.log(ME)
        const update = {
            id: ME.id,
            email: email,
            firstName: fname,
            lastName: lname,
            roleId: myRole,
            role: temp[0].name,
            password: ME.password,
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
                navigate('/users')
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                toast.error("Can't update ! Server error");
            })
    }


    return (
        <>
            <>
                {isLoading ? <Spinner /> : <></>}
                <div className='edit-product-heading'>
                    <span>Edit User</span>
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
                                <div className='reg-sub-holder'>
                                    <label className='reg-form-label' htmlFor="role">Role</label>
                                    {/* <input type="text" onChange={(e) => setEmail(e.target.value)} id='email' className={emailVal ? 'textBox' : 'textBox red-textBox'}></input> */}
                                    <select id='role' required name='role' className={myRoleVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => changeMyRole(e.target.value)} value={myRole}>
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
                            <div className='reg-holder'>
                                <button disabled={!formVal} type='submit' className={formVal ? 'greenBtn' : 'disabledBtn'} onClick={e => submitEditedHandler(e)}>Save</button>
                                <Link to='/users'><button style={{ margin: "0vw 1.7vw 0vw 1vw" }} className='redBtn'>Cancel</button></Link>
                            </div>
                        </form>
                    </div >
                </div >
                <hr></hr>
            </>
        </>
    )
}

export default EditUser