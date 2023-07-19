import '../CSS/registration.css'
import '../UI/CSS/textBox.css'
import '../UI/CSS/redBtn.css'


import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux-store/cart-slice';
import CartItem from './CartItem';
import Spinner from '../UI/Spinner';

export default function CartPage({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth)
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const cart = useSelector(state => state.cart.cart)
    // if (auth) {
    //     navigate('/book-listing');
    // }
    const dispatch = useDispatch();
    const ID = useSelector(state => state.auth.id)
    const removeItem = (item) => {
        setLoading(true)
        axios.delete(`${baseUrl}/api/cart?id=${item.id}`)
            .then(res => {
                setLoading(false)
                update_cart();
            })
            .catch(err => {
                setLoading(false)
                toast.error("Could not remove item right now")
                update_cart();
            })
    }
    const addQuantity = (item) => {
        const obj = {
            id: item.id,
            bookId: item.book.id,
            userId: ID,
            quantity: item.quantity + 1
        }
        setLoading(true)
        axios.put(`${baseUrl}/api/cart`, obj)
            .then(res => {
                setLoading(false)
                update_cart();
            })
            .catch(err => {
                setLoading(false)
                toast.error("Could not add item right now")
                update_cart();
            })
    }
    const removeQuantity = (item) => {
        const obj = {
            id: item.id,
            bookId: item.book.id,
            userId: ID,
            quantity: item.quantity - 1
        }
        setLoading(true)
        axios.put(`${baseUrl}/api/cart`, obj)
            .then(res => {
                setLoading(false)
                update_cart();
            })
            .catch(err => {
                setLoading(false)
                toast.error("Could not remove item right now")
                update_cart();
            })

    }
    useEffect(() => {
        update_cart();
    }, [])
    const update_cart = () => {
        setLoading(true)
        axios.get(`${baseUrl}/api/cart?userId=${ID}`)
            .then(res => {
                setLoading(false);
                return res.data;
            })
            .then(data => {
                dispatch(cartActions.store_cart({ cart: data.result }));
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
                toast.error("Could not get cart !")
            })
    }
    const place_order = () => {
        const obj = {
            userId: parseInt(ID),
            cartIds: cart.map((item) => item.id)
        }
        // console.log(obj)
        axios.post(`${baseUrl}/api/order`, obj)
            .then(res => {
                setLoading(false);
                return res.data;
            })
            .then(data => {
                toast.success("Order placed !")
                update_cart();
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
                toast.error("Could not place the order !")
            })
    }
    return (

        <>
            {isLoading && <Spinner />}
            <div className='reg-container'>
                <div className='reg-login-heading'>
                    <span>Cart Page</span>
                </div>
                <div className='reg-login-container'>
                    {cart.length < 1 && <h4 style={{ fontWeight: "bold", color: "#414141", marginLeft: "15px" }}>Cart is Empty !</h4>}
                    <div

                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {cart.map((item => {
                            return <CartItem item={item} key={item.id} removeItem={removeItem} removeQuantity={removeQuantity} addQuantity={addQuantity} />
                        }))}
                        <div className='reg-login-holder'>

                            {cart.length > 0 && <Link to='/book-listing'><button style={{ margin: "0vw 1.7vw 0vw 1vw" }} className='greenBtn' onClick={place_order}>Place Order</button></Link>}
                            <Link to='/book-listing'><button style={{ margin: "0vw 1.7vw 0vw 1vw" }} className='redBtn'>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
