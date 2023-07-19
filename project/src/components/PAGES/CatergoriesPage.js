import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


import '../CSS/productPage.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/linkBtn.css';


import Spinner from '../UI/Spinner';
import Category from './Category';





export default function CatergoriesPage({ baseUrl }) {
    // const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }
    const [isLoading, setLoading] = useState(false);
    const [CATEGORIES, setCategories] = useState([]);


    // let [currentProducts, changeCurrentProducts] = useState(CATEGORIES.slice(0, 5))
    let [currentPage, changeCurrentPage] = useState(1);
    let [rowsPerPage, changeRowsPerPage] = useState(5);


    useEffect(() => {
        // console.log('here')
        setLoading(true)
        axios.get(`${baseUrl}/api/category?pageSize=${rowsPerPage}&pageIndex=${currentPage}`)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                if (data.result.items.length == 0) {
                    toast.info("No categories found")
                    return
                }
                var temp = [];
                for (const cate of data.result.items) {
                    temp.push(cate)
                }
                setCategories(temp);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                toast.error(err.response.data.error);
            })
    }, [currentPage, rowsPerPage])

    useEffect(() => {
        if (rowsPerPage >= 10 || rowsPerPage <= 3) {
            changeRowsPerPage(3);
        }
        changeCurrentPage(1);
    }, [rowsPerPage])

    useEffect(() => {
        var lastProductIndex = currentPage * rowsPerPage;
        var firstProductIndex = lastProductIndex - rowsPerPage;
        // changeCurrentProducts(CATEGORIES.slice(firstProductIndex, lastProductIndex))
    }, [currentPage, rowsPerPage, CATEGORIES])

    function prevPageHandler() {
        if (currentPage === 1) {
            changeCurrentPage(1);
        }
        else {
            changeCurrentPage(currentPage - 1)
        }
    }
    function nextPageHandler() {
        changeCurrentPage(currentPage + 1)
    }
    const searchHandler = (e) => {
        if (e.target.value.length == 0) {
            navigate('categories')
        }
        if (e.target.value.trim().length % 4 == 0 && e.target.value.length != 0) {
            setLoading(true)
            axios.get(`${baseUrl}/api/category?pageSize=${rowsPerPage}&pageIndex=${currentPage}&keyword=${e.target.value}`)
                .then(result => {
                    setLoading(false)
                    if (result) {
                        return result.data
                    }
                })
                .then(data => {
                    // console.log(data.result)
                    if (data.result.items.length == 0) {
                        toast.info("No categories found")
                        return
                    }
                    setCategories(data.result.items);
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    // console.log(err)
                    toast.error(err.response.data.error);
                })
        } else {
            //notting
        }
    }
    return (
        <>
            {isLoading ? <Spinner /> : <></>}
            <div className='product-page-heading'>
                <span>Category Page</span>
            </div>
            <div className='product-page-search'>
                <input type="text" placeholder='Search...' onChange={e => searchHandler(e)} className='textBox'></input>
                <Link to='add-category' ><button className='redBtn'>Add Category</button></Link>
            </div>
            <div className='product-page-main-container'>

                <table className="table">
                    <thead className="thead-dark" style={{ backgroundColor: "#545455", border: 'none' }}>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {CATEGORIES.map((cate) => {
                            return (
                                <tr key={cate._id}>
                                    <Category category={cate} baseUrl={baseUrl} changeLoading={setLoading} cp={changeCurrentPage} />
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
        </>
    )
}
