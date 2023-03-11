import '../CSS/registration.css'
import '../UI/CSS/textBox.css'
import RedButton from '../UI/RedButton';
import React, { useState, useEffect } from 'react';
function Registration() {
    const [fname, setFname] = useState("")
    const [fnameVal, changeFnameVal] = useState(false)

    const [lname, setLname] = useState("")
    const [lnameVal, changeLnameVal] = useState(false)

    const [email, setEmail] = useState("")
    const [emailVal, changeEmailVal] = useState(false)

    const [password, setPassword] = useState("")
    const [pwVal, changePwVal] = useState(false)

    const [cPassword, setCPassword] = useState("")
    const [cPwVal, changeCPwVal] = useState(false)

    const [formVal, changeFormVal] = useState(false)

    const [btnDisable, changeBtnState] = useState(true)

    useEffect(() => {
        if (fnameVal && lnameVal && emailVal && pwVal && cPwVal) {
            changeFormVal(true)
            changeBtnState(false)
            console.log(formVal)
        }
        else {
            changeFormVal(false)
            changeBtnState(true)
        }
    }, [fnameVal, lnameVal, emailVal, pwVal, cPwVal])

    const checkEmpty = (value) => {
        if (value.trim().length < 1) {
            return true
        }
        else {
            return false
        }
    }
    const checkFname = (e) => {
        let err = checkEmpty(e.target.value)
        if (err) {
            changeFnameVal(false)
            changeBtnState(true)
        } else {
            changeFnameVal(true)
        }
    }
    const checkLname = (e) => {
        let err = checkEmpty(e.target.value)
        if (err) {
            changeBtnState(true)
            changeLnameVal(false)
        } else {
            changeLnameVal(true)
        }
    }
    const emailSyntax = (value) => {
        if (!value.includes('@')) {
            return true
        }

    }
    const checkEmail = (e) => {
        let err = checkEmpty(e.target.value)
        let err2 = emailSyntax(e.target.value)
        if (err || err2) {
            changeBtnState(true)
            changeEmailVal(false)
        } else {
            changeEmailVal(true)
        }
    }
    const checkPW = (e) => {
        let err = checkEmpty(e.target.value)
        if (err) {
            changeBtnState(true)
            changePwVal(false)
        } else {
            changePwVal(true)
        }
    }
    const matchBoth = (value) => {
        if (value === password) {
            return false
        }
        else {
            return true
        }
    }
    const checkCPW = (e) => {
        let err = checkEmpty(e.target.value)
        let err2 = matchBoth(cPassword)
        if (err || err2) {
            changeBtnState(true)
            changeCPwVal(false)
        } else {
            changeCPwVal(true)
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        let user = {
            fname: fname,
            lname: lname,
            email: email,
            password: password
        }
        console.log(JSON.stringify(user))
    }

    return (
        <>
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
                            <label className='reg-form-label' for="fname">First Name</label>
                            <input type="text" id='fname' className={fnameVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => setFname(e.target.value)} onBlur={checkFname}></input>
                        </div>
                        {/* ->>>>>>>>> Last Name section */}
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="lname">Last Name</label>
                            <input type="text" onChange={(e) => setLname(e.target.value)} onBlur={checkLname} id='lname' className={lnameVal ? 'textBox' : 'textBox red-textBox'}></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                        {/* ->>>>>>>>> Email section */}
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="email">Email Address</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} id='email' className={emailVal ? 'textBox' : 'textBox red-textBox'}></input>
                        </div>
                    </div>
                    <div className='reg-sub-heading' id='reg-login'>
                        <span className='reg-info' style={{ margin: "0px" }}>Login Information</span>
                        <hr></hr>
                    </div>
                    <div className='reg-holder'>
                        {/* ->>>>>>>>> Password section */}
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="password">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} onBlur={checkPW} id='password' className={pwVal ? 'textBox' : 'textBox red-textBox'}></input>
                        </div>
                        {/* ->>>>>>>>> Re-Password section */}
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="re-password">Confirm Password</label>
                            <input type="password" onChange={(e) => setCPassword(e.target.value)} onBlur={checkCPW} id='re-password' className={cPwVal ? 'textBox' : 'textBox red-textBox'}></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                        {btnDisable ? <h3 style={{ color: "red" }}>Invalid Form</h3> : <RedButton buttonText="Register" onSubmit={submitForm} />}
                    </div>
                </form>
                <hr></hr>
            </div>
        </>
    )
}
export default Registration;