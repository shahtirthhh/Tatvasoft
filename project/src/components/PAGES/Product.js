import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/productPage.css';
import '../UI/CSS/greenBtn.css'
import '../UI/CSS/redBtn.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { bookActions } from '../../redux-store/books-slice';
import { useDispatch, useSelector } from 'react-redux';


function Product({ product, baseUrl, changeLoading }) {
    const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    if (!auth) {
        navigate('/login');
    }
    const dispatch = useDispatch();
    const update_redux_book_state = () => {
        axios.get(`${baseUrl}/api/book/all`)
            .then(result => {
                changeLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                dispatch(bookActions.updateBookState({ books: data.result }))
            })
            .catch(err => {
                changeLoading(false)
                toast.error(err.response.data.error);
            })
    }
    const delete_product = () => {
        const confirm = window.confirm("Do you really want to delete this product ?");
        if (confirm) {
            changeLoading(true)
            axios.delete(`${baseUrl}/api/book?id=${product.id}`)
                .then(result => {
                    return result.data
                })
                .then(data => {
                    update_redux_book_state();
                    toast.success("Deleted successfully !")
                })
                .catch(err => {
                    changeLoading(false)
                    toast.error("Cannot delete this product at this moment")
                })
        }
    }
    return (
        <>
            <td><img src={`${product.base64image}`} id='-img' alt='img' style={{ width: '100px', height: '100px' }}></img></td>
            <td>{product.name}</td>
            <td>{product.price}₹</td>
            <td>{product.category}</td>
            <td><Link to={"edit-product/" + product.id}><button className='editButton'>Edit</button></Link>
                <button className='deleteButton' onClick={delete_product}>Delete</button></td>

            {/* <div className='product-page-product-row'>
                <div className='product-page-product-data'>image</div>
                <div className='product-page-product-data'>{product.name}</div>
                <div className='product-page-product-data'>{product.price}</div>
                <div className='product-page-product-data'>{product.category}</div>
                <div className='product-page-product-data'>
                    <div className='product-page-button-container'>
                        <Link to={"edit-product/" + product.id}><button className='editButton'>Edit</button></Link>
                        <button className='deleteButton'>Delete</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Product