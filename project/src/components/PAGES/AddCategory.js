import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../CSS/editProduct.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/redBtn.css';
import '../UI/CSS/greenBtn.css';


import Spinner from '../UI/Spinner';
import { toast } from 'react-toastify';

export default function EditCategory({ baseUrl }) {

    // const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }
    const [isLoading, setLoading] = useState(false);

    const [name, changeName] = useState('');
    const [nameVal, changeNameVal] = useState(false);

    useEffect(() => {
        if (name.trim().length < 3) {
            changeNameVal(false)
        } else {
            changeNameVal(true);
        }

    }, [name])


    const submitEditedHandler = (e) => {
        e.preventDefault();
        const category = {
            name: name
        }
        // console.log(update)
        add_category(category);
    }
    const add_category = (formData) => {
        setLoading(true)
        // console.log(formData)
        axios.post(`${baseUrl}/api/category`, formData)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                toast.success('Added successfully')
                navigate('/categories');
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                toast.error(err.response.data.error);
            })
    }




    return (
        <>
            {isLoading ? <Spinner /> : <></>}
            <div className='edit-product-heading'>
                <span>Add Category</span>
            </div>
            <div className='reg-container'>
                <div className='reg-login-container'>
                    <form className='reg-login-form'>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> Category Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="name">Name</label>
                                <input type="text" id='name' defaultValue={name} className={nameVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => changeName(e.target.value)} ></input>
                                {!nameVal && <p className='reg-p'>Name must be minimum 3 characters long</p>}
                            </div>
                        </div>
                    </form>
                    <div className='reg-holder'>
                        <button disabled={!nameVal} type='submit' className={nameVal ? 'greenBtn' : 'disabledBtn'} onClick={e => submitEditedHandler(e)}>Save</button>
                        <Link to='/categories'><button style={{ margin: "0vw 1.7vw 0vw 1vw" }} className='redBtn'>Cancel</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
