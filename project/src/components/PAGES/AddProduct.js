import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bookActions } from '../../redux-store/books-slice';
// admin@tatvasoft.com
// admin@123
import '../CSS/editProduct.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/redBtn.css';
import '../UI/CSS/greenBtn.css';
import Spinner from '../UI/Spinner';
import { toast } from 'react-toastify';

function AddProduct({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    if (!auth) {
        navigate('/login');
    }
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    // const products = useSelector(state => state.books.books)
    // const { product_id } = useParams()
    // const prod_index = (products.findIndex((product) => product.id == product_id))
    // let my_product = products[prod_index]// const my_product = 

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseUrl}/api/category/all`)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                setCategories(data.result)
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.response.data.error);
            })
    }, [])
    const update_redux_book_state = () => {
        axios.get(`${baseUrl}/api/book/all`)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                dispatch(bookActions.updateBookState({ books: data.result }))
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.response.data.error);
            })
    }
    const [name, setName] = useState("")
    const [nameVal, changeNameVal] = useState(false)

    const [price, setPrice] = useState(0)
    const [priceVal, changePriceVal] = useState(false)

    const [category, setCategory] = useState(-1)
    const [categoryVal, changeCategoryVal] = useState(false)

    const [desc, setDesc] = useState("")
    const [descVal, changeDescVal] = useState(false)

    const [file, changeFile] = useState(null);

    const [formVal, changeFormVal] = useState(false)
    const addHandler = (e) => {
        e.preventDefault();
        const new_product = {
            name: name,
            description: desc,
            price: parseInt(price),
            categoryId: parseInt(category),
            base64image: file
        }
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }
        reader.onloadend = function () {
            new_product.base64image = reader.result
        }
        add_product(new_product);
    }
    const add_product = (formData) => {
        setLoading(true)
        axios.post(`${baseUrl}/api/book`, formData)
            .then(result => {
                return result.data
            }).then(data => {
                update_redux_book_state();
                toast.success("Added successfully");
                navigate('/product-page')
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                toast.error("Can't add ! Server error");
            })
    }
    useEffect(() => {
        if (nameVal && priceVal && descVal && categoryVal) {
            changeFormVal(true)
        }
        else {
            changeFormVal(false)
        }
    }, [nameVal, priceVal, descVal, categoryVal])

    useEffect(() => {
        if (price <= 0) {
            changePriceVal(false)
            changeFormVal(false)
        } else {
            changePriceVal(true)
        }
    }, [price])
    useEffect(() => {
        if (desc.trim().length < 7) {
            changeDescVal(false)
            changeDescVal(false)
        } else {
            changeDescVal(true)
        }
    }, [desc])
    useEffect(() => {
        if (name.trim().length < 4) {
            changeNameVal(false)
            changeFormVal(false)
        } else {
            changeNameVal(true)
        }
    }, [name])
    useEffect(() => {
        if (category == -1) {
            changeCategoryVal(false)
            changeFormVal(false)
        } else {
            changeCategoryVal(true)
        }
    }, [category])

    return (
        <>
            {isLoading ? <Spinner /> : <></>}
            <div className='edit-product-heading'>
                <span>Add Product</span>
            </div>
            <div className='reg-container'>
                <div className='reg-login-container'>
                    <form className='reg-login-form'>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> First Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="name">Name</label>
                                <input type="text" id='name' defaultValue={name} className={nameVal ? 'textBox' : 'textBox red-textBox'} onChange={(e) => setName(e.target.value)} ></input>
                            </div>
                            {/* ->>>>>>>>> Last Name section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="price">Price</label>
                                <input type="number" min={5} defaultValue={price} onChange={(e) => setPrice(e.target.value)} id='price' className={priceVal ? 'textBox' : 'textBox red-textBox'}></input>
                            </div>
                        </div>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> Categories section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmlFor="category">Shop By Categories</label>
                                <select className={categoryVal ? 'textBox' : 'textBox red-textBox'} id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                    <option value={-1}>Select category</option>
                                    {categories.map(cate => {
                                        return (
                                            <option key={cate.id} value={cate.id}>{cate.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            {/* ->>>>>>>>>Description section */}
                            <div className='reg-sub-holder'>
                                <label className='reg-form-label' htmFor="desc">Description</label>
                                <textarea rows="4" cols="50" maxLength={80} style={{ resize: "none" }} defaultValue={desc} onChange={(e) => setDesc(e.target.value)} id='desc' className={descVal ? 'textBox' : 'textBox red-textBox'} />
                            </div>
                        </div>
                        <div className='reg-holder'>
                            {/* ->>>>>>>>> File upload section */}
                            <div className='reg-sub-holder'>
                                <input type='file' id='file-upload' onChange={e => changeFile(e.target.files[0])}></input>
                            </div>
                        </div>
                        <div className='reg-holder'>
                            <button disabled={!formVal} type='submit' className={formVal ? 'greenBtn' : 'disabledBtn'} onClick={e => addHandler(e)}>Add</button>
                            <Link to='/product-page'><button style={{ margin: "0vw 1.7vw 0vw 1vw" }} className='redBtn'>Cancel</button></Link>
                        </div>
                    </form>
                </div >
            </div >
            <hr></hr>
        </>
    )
}

export default AddProduct