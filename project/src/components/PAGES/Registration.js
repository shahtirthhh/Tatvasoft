import Header from '../SECTIONS/Header';
import Search from '../SECTIONS/Search';
import Footer from '../SECTIONS/Footer';
import '../CSS/registration.css'
import '../UI/CSS/textBox.css'
import RedButton from '../UI/RedButton';
function Registration() {
    return (
        <>
            <Header />
            <Search placeholder="What are you looking for..." />
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
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="fname">First Name</label>
                            <input type="text" id='fname' className='textBox'></input>
                        </div>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="lname">Last Name</label>
                            <input type="text" id='lname' className='textBox'></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="email">Email Address</label>
                            <input type="email" id='email' className='textBox'></input>
                        </div>
                    </div>
                    <div className='reg-sub-heading' id='reg-login'>
                        <span className='reg-info' style={{ margin: "0px" }}>Login Information</span>
                        <hr></hr>
                    </div>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="password">Password</label>
                            <input type="password" id='password' className='textBox'></input>
                        </div>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="re-password">Confirm Password</label>
                            <input type="password" id='re-password' className='textBox'></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                        <RedButton buttonText="Register" />
                    </div>
                </form>
                <hr></hr>
            </div>
            <Footer />
        </>
    )
}
export default Registration;