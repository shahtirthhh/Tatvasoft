import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Header from '../SECTIONS/Header';
// import Footer from '../SECTIONS/Footer';
import '../CSS/login.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/redBtn.css';
import RedButton from '../UI/RedButton';
import axios from 'axios';
import { toast } from 'react-toastify';
import { authActions } from '../../redux-store/auth-slice';
import { cartActions } from '../../redux-store/cart-slice';
import Spinner from '../UI/Spinner'
import { useDispatch, useSelector } from 'react-redux';


const Login = ({ baseUrl }) => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth.auth)
    if (auth) {
        navigate('/book-listing');
    }
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [emailVal, setEmailVal] = useState(false)

    const [password, setPassword] = useState('')
    const [pwVal, setPwVal] = useState(true)

    const [isLoading, setLoading] = useState(false);

    const [formVal, setFormVal] = useState(false)
    const cart_loader = (id) => {
        setLoading(true);
        axios.get(`${baseUrl}/api/cart?userId=${id}`)
            .then(res => {
                return res.data;
            })
            .then(data => {
                dispatch(cartActions.store_cart({ cart: data.result }))
            })
            .catch(err => {
                toast.error("Could not fetch cart !")
                console.log(err)
            })
    }
    const check_email_val = () => {
        if (email.trim().length < 1) {
            setFormVal(false)
            return false;
        }
        else if (!email.includes("@")) {
            setFormVal(false)
            return false;
        }
        else {
            return true
        }
    }
    const check_password_val = () => {
        if (password.trim().length < 5) {
            setFormVal(false)
            return false;
        } else {
            return true;
        }
    }
    useEffect(() => {
        setFormVal(false)
    }, [])
    useEffect(() => {
        if (email.trim().length < 0) {
            setFormVal(false)
            setEmailVal(check_email_val)
        } else {
            setEmailVal(check_email_val)
        }
    }, [email])
    useEffect(() => {
        if (password.trim().length < 1) {
            setFormVal(false)
            setPwVal(check_password_val)
        } else {
            setPwVal(check_password_val)
        }
    }, [password])
    useEffect(() => {
        if (emailVal && pwVal) {
            setFormVal(true)
        } else {
            setFormVal(false)
        }
    }, [emailVal, pwVal])
    const login_with_cred = (e) => {
        e.preventDefault();
        if (!check_email_val || !check_password_val) {
            setFormVal(false)
            if (!check_email_val) { setEmailVal(false) }
            else if (!check_password_val) { setPwVal(false) }
            return
        }
        else {
            // console.log(`${baseurl}/api/user/login`)
            const user = { email, password };
            setLoading(true)
            axios.post(`${baseUrl}/api/user/login`, user)
                .then(res => {
                    setLoading(false)
                    return res.data;
                })
                .then(data => {
                    if (data.code == 200) {
                        dispatch(authActions.login({ pw: data.result.password, role: data.result.role, id: data.result.id }))
                        toast.success('success !');
                        localStorage.setItem('user', JSON.stringify(data.result));
                        cart_loader(data.result.id);
                        navigate('/book-listing')
                    }
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err)
                    toast.error(err.response.data.error);
                })
        }
    }
    return (
        <>
            {/* <Header /> */}
            {isLoading ? <Spinner /> : <></>}

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
                        <Link to='/'><RedButton buttonText="Create An Account" /></Link>

                    </div>
                </div>
                <div className='login-sub-container'>
                    <span className='login-sub-header'>Registered User</span>
                    <span className='login-msg'>If you have account with us, please log in</span>
                    {/* ----------------  Form Here */}
                    <form className='login-form'>
                        {/* ->>>>>>>>> Email section */}
                        <div className='login-sub-holder'>
                            <label className='login-form-label' htmlFor="email">Email Address</label>
                            <input onChange={e => setEmail(e.target.value)} type="text" className={emailVal ? 'textBox' : 'textBox red-textBox'} id='email'></input>
                            {!emailVal && <p className='reg-p'>Please enter a valid Email</p>}
                        </div>
                        <div className='login-sub-holder'>
                            <label className='login-form-label' htmlFor="password">Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" className={pwVal ? 'textBox' : 'textBox red-textBox'} id='password'></input>
                            {!pwVal && <p className='reg-p'>Password must be long enough</p>}
                        </div>
                        <div className='login-sub-holder'>
                            <button disabled={!formVal} type='submit' className={formVal ? 'redBtn' : 'disabledBtn'} onClick={login_with_cred}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr></hr>
            {/* <Footer /> */}
        </>
    )
}
export default Login;