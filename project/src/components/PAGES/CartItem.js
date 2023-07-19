import '../CSS/registration.css'
import '../UI/CSS/textBox.css'
import '../UI/CSS/redBtn.css'


import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CartItem({ item, removeItem, addQuantity, removeQuantity }) {


    return (
        <>
            <div style={{ margin: "10px", borderRadius: "4px", padding: "25px", "boxShadow": "1px 1px 4px rgba(0, 0, 0, 0.418)" }}>
                <div style={{ display: 'flex' }}>
                    <div>
                        <img src={`${item.book.base64image}`} alt='image' style={{ width: "130px", height: "150px" }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <label style={{ fontWeight: "bold", color: "#414141", marginLeft: "15px" }} >{item.book.name}</label>
                        <label className='reg-info' style={{ marginLeft: "15px" }}>{item.book.price}₹</label>
                        <div style={{ marginLeft: "15px", width: "90%", display: 'flex', flexDirection: "row", flexWrap: "wrap" }}>
                            <Link>
                                <button className='redBtn-light' style={{ margin: "4px", height: "17px", width: "25px", padding: '1px 1px 25px 1px' }}
                                    onClick={e => removeQuantity(item)}
                                >
                                    -
                                </button>
                            </Link>
                            <h6 style={{ margin: "5px 5px" }}>{item.quantity}</h6>
                            <Link>
                                <button className='redBtn-light' style={{ margin: "4px", height: "17px", width: "25px", padding: '1px 1px 25px 1px' }}
                                    onClick={e => addQuantity(item)}
                                >
                                    +
                                </button>
                            </Link>
                            <div>
                                <Link>
                                    <button className='linkBtn'
                                        onClick={e => removeItem(item)}
                                    >
                                        Remove item
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem