import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/productPage.css';
import '../UI/CSS/greenBtn.css'
import '../UI/CSS/redBtn.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux-store/users-slice';

function User({ user, baseUrl, changeLoading, cp }) {
    const auth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }
    const delete_user = () => {
        const confirm = window.confirm("Do you really want to delete this user ?");
        if (confirm) {
            // console.log(user.id)
            changeLoading(true)
            axios.delete(`${baseUrl}/api/user?id=${user.id}`)
                .then(result => {
                    return result.data
                })
                .then(data => {
                    changeLoading(false)
                    dispatch(userActions.delete_user({ id: user.id }))
                    // cp(1)
                    toast.success("Deleted successfully !")
                })
                .catch(err => {
                    changeLoading(false)
                    console.log(err)
                    toast.error("Cannot delete this user at this moment")
                })
        }
    }
    return (
        <>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <Link to={"edit-user/" + user.id}><button className='editButton'>Edit</button></Link>
                <button className='deleteButton' onClick={delete_user}>Delete</button>
            </td>
        </>
    )
}

export default User