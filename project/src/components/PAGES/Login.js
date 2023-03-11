import React from 'react';
import '../CSS/login.css';
import '../UI/CSS/textBox.css';
import RedButton from '../UI/RedButton';
const Login = (props) => {

    return (
        <>
            <div className='login-login-heading'>
                <span>Login or Create an Account</span>
            </div>
            <div className='login-main-container'>
                <div className='login-sub-container'>
                    <span className='login-sub-header'>New Customer</span>
                    <span className='login-msg'>Registration is free and easy</span>
                    <ul className='login-ul'>
                        <li className='login-li'>Faster Checkout</li>
                        <li className='login-li'>Save multiple shipping addresses</li>
                        <li className='login-li'>View and track orders and more</li>
                    </ul>
                    <div className='login-button-container'>
                        <RedButton buttonText="Create An Account" />
                    </div>
                </div>
                <div className='login-sub-container'>
                    <span className='login-sub-header'>Registered User</span>
                    <span className='login-msg'>If you have account with us, please log in</span>
                    {/* ----------------  Form Here */}
                    <form className='login-form'>
                        {/* ->>>>>>>>> Email section */}
                        <div className='login-sub-holder'>
                            <label className='login-form-label' for="email">Email Address</label>
                            <input type="text" className='textBox' id='email'></input>
                        </div>
                        <div className='login-sub-holder'>
                            <label className='login-form-label' for="password">Password</label>
                            <input type="password" className='textBox' id='password'></input>
                        </div>
                        <div className='login-sub-holder'>
                            <RedButton buttonText='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;