import React, { useEffect, useState } from 'react'
import '../CSS/bookListing.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { bookActions } from '../../redux-store/books-slice'
import { toast } from 'react-toastify'
import Spinner from '../UI/Spinner'
import '../UI/CSS/textBox.css'
import '../UI/CSS/redBtn.css'
import { useNavigate } from 'react-router-dom'
import cartActions from '../../redux-store/cart-slice';

export default function BookListing({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth);
    const USER_ID = useSelector(state => state.auth.id);
    const navigate = useNavigate();
    if (!auth) {
        navigate('/login');
    }
    useEffect(() => {
        setLoading(true)
        axios.get(`${baseUrl}/api/book/all`)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                dispatch(bookActions.updateBookState({ books: data.result }))
                changeDisplayBook(data.result)
            })
            .catch(err => {
                toast.error(err.response.data.error);
            })
    }, [])
    const BOOKS = useSelector(state => state.books.books);
    const [displayedBooks, changeDisplayBook] = useState([])

    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false);
    const searchHandler = (e) => {
        let name = e.target.value.toLowerCase();
        changeDisplayBook(BOOKS.filter(book => book.name.toLowerCase().includes(name)))
    }
    const sortHandler = (e) => {
        if (e.target.value == 0) {
            var temp = displayedBooks.slice(0)
            changeDisplayBook(temp.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // sort in an ascending order
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }))
        } else {
            var temp = displayedBooks.slice(0)
            changeDisplayBook(temp.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // sort in an ascending order
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
            }))

        }
    }
    const add_to_cart = (book) => {
        const item = {
            "bookId": book.id,
            "userId": USER_ID,
            "quantity": 1
        }
        setLoading(true)
        axios.post(`${baseUrl}/api/cart`, item)
            .then(data => {
                setLoading(false)
                return data.data
            })
            .then(data => {
                toast.success("Added to the cart")
            }).catch(err => {
                setLoading(false)
                toast.error("Error adding to the cart")
            })
    }
    return (
        <>
            {isLoading ? <Spinner /> : <></>}
            <div className='book-listing-container'>
                <div className='book-listing-heading'>
                    <span>Book Listing</span>
                </div>
                <div className='book-listing-selectors'>
                    <div><h4 style={{ margin: "0px" }}>Total - {BOOKS.length}</h4></div>
                    <div id='book-listing-search'>
                        <input type='text' placeholder='Search...' className='textBox-book-listing-search' onChange={e => searchHandler(e)}></input>
                    </div>
                    <div id='book-listing-sort'>
                        <label htmlFor='sort-by'>Sort &nbsp;</label>
                        <select id='sort-by' defaultValue={0} className='textBox-book-listing-search' onChange={e => sortHandler(e)}>
                            <option value={0}>a-z</option>
                            <option value={1}>z-a</option>
                        </select>
                    </div>
                </div>
                <div className='book-listing-sub-container'>
                    {displayedBooks.map(book => {
                        return (
                            <div key={book._id} className='book-listing-item'>
                                <img src={`${book.base64image}`} id='book-listing-img' alt='img'></img>
                                <hr />
                                <h4 id='book-listing-name' >{book.name}</h4>
                                <h6 id='book-listing-category' >{book.category}</h6>
                                <p id='book-listing-desc' >{book.description}</p>
                                <hr />

                                <div style={{ display: "flex", justifyContent: "center", marginTop: "2px" }}>
                                    <h6 id='book-listing-price' >MRP {book.price} ₹</h6>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                    <button id='book-listing-btn' className='redBtn-light' style={{ borderRadius: "8px", width: "230px", letterSpacing: "1px", fontSize: "14px" }} onClick={e => add_to_cart(book)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
