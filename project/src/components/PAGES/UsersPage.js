import React, { useState, useEffect } from 'react';
import '../CSS/productPage.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/linkBtn.css';
// import Header from '../SECTIONS/Header';
// import Footer from '../SECTIONS/Footer';
import Spinner from '../UI/Spinner';

import RedButton from '../UI/RedButton';
import User from './User';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { userActions } from '../../redux-store/users-slice';
export default function UsersPage({ baseUrl }) {
    const auth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // if (!auth) {
    //     navigate('/login');
    // }
    const [isLoading, setLoading] = useState(false);
    const users = useSelector(state => state.users.users)
    // console.log(users)
    let [currentProducts, changeCurrentProducts] = useState(users.slice(0, 5))
    let [currentPage, changeCurrentPage] = useState(1);
    let [rowsPerPage, changeRowsPerPage] = useState(5);

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseUrl}/api/user?pageSize=${rowsPerPage}&pageIndex=${currentPage}`)
            .then(result => {
                setLoading(false)
                if (result) {
                    return result.data
                }
            })
            .then(data => {
                dispatch(userActions.updateUserState({ users: data.result.items }));
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
        changeCurrentProducts(users.slice(firstProductIndex, lastProductIndex))
    }, [currentPage, rowsPerPage, users])
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
        if (e.target.value.trim().length % 4 == 0 && e.target.value.length != 0) {
            setLoading(true)
            axios.get(`${baseUrl}/api/user?pageSize=${rowsPerPage}&pageIndex=${currentPage}&keyword=${e.target.value}`)
                .then(result => {
                    setLoading(false)
                    if (result) {
                        return result.data
                    }
                })
                .then(data => {
                    dispatch(userActions.updateUserState({ users: data.result.items }));
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
            {/* <Header /> */}
            {isLoading ? <Spinner /> : <></>}
            <div className='product-page-heading'>
                <span>Users Page</span>
            </div>
            <div className='product-page-search'>
                <input type="text" placeholder='Search by Email' onChange={e => searchHandler(e)} className='textBox'></input>
            </div>
            <div className='product-page-main-container'>

                <table className="table">
                    <thead className="thead-dark" style={{ backgroundColor: "#545455", border: 'none' }}>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <User user={product} baseUrl={baseUrl} changeLoading={setLoading} cp={changeCurrentPage} />
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
