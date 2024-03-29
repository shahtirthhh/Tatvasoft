import React, { useState, useEffect } from 'react';
import '../CSS/productPage.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/linkBtn.css';
// import Header from '../SECTIONS/Header';
// import Footer from '../SECTIONS/Footer';
import Spinner from '../UI/Spinner';
import { bookActions } from '../../redux-store/books-slice';

import RedButton from '../UI/RedButton';
import Product from './Product';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
function ProductPage({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    if (!auth) {
        navigate('/login');
    }
    const [isLoading, setLoading] = useState(false);
    const [displayedProducts, changeDisplayProduct] = useState([]);
    const dispatch = useDispatch()
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
                changeDisplayProduct(data.result)
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.response.data.error);
            })
    }, [])
    const products = useSelector(state => state.books.books);

    let [currentProducts, changeCurrentProducts] = useState(products.slice(0, 5))
    let [currentPage, changeCurrentPage] = useState(1);
    let [rowsPerPage, changeRowsPerPage] = useState(5);
    useEffect(() => {
        if (rowsPerPage >= 10 || rowsPerPage <= 3) {
            changeRowsPerPage(3);
        }
        changeCurrentPage(1);
    }, [rowsPerPage])
    useEffect(() => {
        var lastProductIndex = currentPage * rowsPerPage;
        var firstProductIndex = lastProductIndex - rowsPerPage;
        changeCurrentProducts(products.slice(firstProductIndex, lastProductIndex))
    }, [currentPage, rowsPerPage, products])
    function prevPageHandler() {
        if (currentPage === 1) {
            changeCurrentPage(1);
        }
        else {
            changeCurrentPage(currentPage - 1)
        }
    }
    function nextPageHandler() {
        if (currentPage > Math.floor(products.length / rowsPerPage)) {
            changeCurrentPage(1)
        }
        else {
            changeCurrentPage(currentPage + 1)
        }
    }
    const searchHandler = (e) => {
        let temp = products.filter(product => product.name.toLowerCase().includes(e.target.value));
        changeCurrentProducts(temp)
    }

    return (
        <>
            {/* <Header /> */}
            {isLoading ? <Spinner /> : <></>}
            <div className='product-page-heading'>
                <span>Product Page</span>
            </div>
            <div className='product-page-search'>
                <input type="text" placeholder='Search...' onChange={e => searchHandler(e)} className='textBox'></input>
                <Link to='add-product' ><button className='redBtn'>Add product</button></Link>
            </div>
            <div className='product-page-main-container'>

                <table className="table">
                    <thead className="thead-dark" style={{ backgroundColor: "#545455", border: 'none' }}>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Price ₹</th>
                            <th scope="col">Category</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <Product product={product} baseUrl={baseUrl} changeLoading={setLoading} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className='product-page-pagination-box'>
                    <label htmlFor="rows-per-page-selector">Rows per page</label>
                    <input id="rows-per-page-selector" style={{ width: "5vw", height: "2vw" }} className="textBox" type="number" min="2" max="10" onChange={e => changeRowsPerPage(e.target.value)} placeholder={rowsPerPage}></input>
                    <label>{currentPage}</label>
                    <button onClick={prevPageHandler} className="page-change-btn">&lt;</button>
                    <button onClick={nextPageHandler} className="page-change-btn">&gt;</button>
                </div>
            </div>
            <hr></hr>
            {/* <Footer /> */}
        </>
    )
}

export default ProductPage