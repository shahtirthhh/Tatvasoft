
import '../CSS/searchSection.css'
import '../UI/CSS/textBox.css'
import '../UI/CSS/greenBtn.css'
import '../UI/CSS/redBtn.css'
import '../UI/CSS/linkBtn.css'
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../UI/Spinner'
function Search({ baseUrl }) {
    const [searchBooks, updateSearchBooks] = useState([]);
    const [searchText, changeSearchText] = useState('');
    const [isLoading, setLoading] = useState(false);
    const searchHandler = (e) => {
        changeSearchText(e.target.value);
        if (e.target.value.trim().length % 3 == 0) {
            setLoading(true);
            axios.get(`${baseUrl}/api/book/search?keyword=${e.target.value}`)
                .then(result => {
                    setLoading(false);
                    if (!result) {
                        toast.error('Something went wrong !')
                        return;
                    } else { return result.data }
                })
                .then(data => {
                    if (data.code == 200) {
                        updateSearchBooks(data.result)
                        if (data.result.length == 0) {
                            toast.warning("No books found !")
                        }
                    }
                })
                .catch(err => {
                    setLoading(false);
                    toast.error('Empty search field !')
                })
        }
        else {
            updateSearchBooks([])
        }
    }
    const searchButtonHandler = (e) => {
        setLoading(true);
        axios.get(`${baseUrl}/api/book/search?keyword=${searchText}`)
            .then(result => {
                setLoading(false);
                if (!result) {
                    toast.error('Something went wrong !')
                    return;
                } else { return result.data }
            })
            .then(data => {
                if (data.code == 200) {
                    updateSearchBooks(data.result)
                }
            })
            .catch(err => {
                setLoading(false);
                toast.error('Empty search field !')
            })
    }
    const cancleHandler = (e) => {
        changeSearchText('')
        updateSearchBooks([])
        document.getElementById('search-box').value = '';
    }
    return (
        <>
            {isLoading ? <Spinner /> : <></>}
            <ToastContainer theme='colored' autoClose={500} closeOnClick />
            <div className='search-section'>
                <div className='search-sub-section'>
                    <input type="text" placeholder="What are you looking for..." id='search-box' className='textBox' onChange={e => searchHandler(e)} onBlur={e => updateSearchBooks([])}></input>
                    <div className={searchBooks.length > 0 ? 'search-results' : 'search-result-empty'}>
                        {searchBooks.map(book => {
                            return (
                                <div className='searched-book'>
                                    <div className='search-image-container'>
                                        <img src={`${book.base64image}`} alt='img'></img>
                                    </div>
                                    <div className='search-book-data'>
                                        <p>{book.name}</p>
                                        <p>{book.price}₹</p>
                                        <button style={{ borderRadius: "8px", padding: "2px 10px 2px 10px " }} className='linkBtn'>Add to cart</button>
                                    </div>
                                    <div className='search-add-cart'>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className="greenBtn" onClick={e => searchButtonHandler(e)}>Search</button>
                <button className="redBtn" onClick={e => cancleHandler(e)}>Cancel</button>
            </div >
        </>
    )
}
export default Search;