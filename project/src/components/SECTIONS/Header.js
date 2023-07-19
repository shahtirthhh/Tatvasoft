
// import WhiteButton from '../UI/WhiteButton';
import '../CSS/header.css';
import '../UI/CSS/linkBtn.css'
import '../UI/CSS/whiteBtn.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux-store/auth-slice';

function Header() {
    const auth = useSelector((state) => state.auth.auth)
    const role = useSelector((state) => state.auth.role)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(authActions.logout())
        localStorage.removeItem('user');
        navigate('/login')
    }
    return (
        <>
            {/* Header Containing logo and Login/Register/cart Button */}
            <div className='header'>
                {/* <h2>TatvaSoft</h2> */}
                <h2><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVO-9pc2HtXvTt3MBR2Iu-yL9-TSuPgroWrQ&usqp=CAU' alt='tatvasoft' /></h2>
                {/* <div className='header-menu'>
                    <WhiteButton buttonText="Menu" click={menu} />
                </div> */}
                <div className='header-buttons'>
                    {auth && <Link style={{ margin: "8px 20px 0px 0px" }} className='linkBtn' to='book-listing'>Shop</Link>}
                    {auth && <Link style={{ margin: "8px 20px 0px 0px" }} className='linkBtn' to='update-profile'>Update profile</Link>}
                    {auth && <Link style={{ margin: "8px 20px 0px 0px" }} to='/product-page' className='linkBtn'>Books</Link>}

                    {role == 'admin' ? <Link style={{ margin: "8px 20px 0px 0px" }} className='linkBtn' to='users'>Users</Link> : <></>}
                    {role == 'admin' ? <Link style={{ margin: "8px 20px 0px 0px" }} className='linkBtn' to='categories'>Categories</Link> : <></>}
                    {/* <WhiteButton buttonText="Cart" /> */}
                    {auth ? <button style={{ marginRight: "8px" }} className='whiteBtn' onClick={logoutHandler}>Logout</button> : <><Link className='linkBtn' to='/login'>Login</Link> | <Link className='linkBtn' to='/'>Register</Link></>}
                    {auth && <Link to='/cart'><button className='whiteBtn'>Cart</button></Link>}
                </div>
            </div>
        </>
    )
}
export default Header;