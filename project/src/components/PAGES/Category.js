import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


import '../CSS/productPage.css';
import '../UI/CSS/greenBtn.css'
import '../UI/CSS/redBtn.css'


export default function Category({ category, baseUrl, changeLoading, cp }) {

    // const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }

    const delete_category = () => {
        const confirm = window.confirm("Do you really want to delete this category ?");
        if (confirm) {
            // console.log(user.id)
            changeLoading(true)
            axios.delete(`${baseUrl}/api/category?id=${category.id}`)
                .then(result => {
                    return result.data
                })
                .then(data => {
                    changeLoading(false)
                    cp(2)
                    // dispatch(userActions.delete_user({ id: user.id }))
                    toast.success("Deleted successfully !")
                })
                .catch(err => {
                    changeLoading(false)
                    console.log(err)
                    toast.error("Cannot delete this category at this moment")
                })
        }
    }
    return (
        <>
            <td>{category.name}</td>
            <td style={{ marginLeft: '20vw' }}>
                <Link to={"edit-category/" + category.id + '/' + category.name}><button className='editButton'>Edit</button></Link>
                <button className='deleteButton' onClick={delete_category}>Delete</button>
            </td>
        </>
    )
}
