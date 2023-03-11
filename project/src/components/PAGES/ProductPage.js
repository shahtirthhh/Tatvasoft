import React, { useState, useEffect } from 'react';
import '../CSS/productPage.css';
import '../UI/CSS/textBox.css';
import '../UI/CSS/linkBtn.css';

import RedButton from '../UI/RedButton';
import Product from './Product';
function ProductPage(props) {
    const { products } = props;
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
    }, [currentPage, rowsPerPage])
    function prevPageHandler() {
        if (currentPage == 1) {
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
    return (
        <>
            <div className='product-page-heading'>
                <span>Product Page</span>
            </div>
            <div className='product-page-search'>
                <input type="text" placeholder='Search...' className='textBox'></input>
                <RedButton buttonText="Add Product" />
            </div>
            <div className='product-page-main-container'>
                <div className='product-page-table-head'>
                    <div className='product-page-td'>Id</div>
                    <div className='product-page-td'>Title</div>
                    <div className='product-page-td'>Font</div>
                    <div className='product-page-td'>Query</div>
                </div>
                {currentProducts.map((product) => {
                    return (<Product product={product} />)
                })}
                <div className='product-page-pagination-box'>
                    <label for="rows-per-page-selector">Rows per page</label>
                    <input id="rows-per-page-selector" style={{ width: "5vw", height: "2vw" }} className="textBox" type="number" min="2" max="10" onChange={e => changeRowsPerPage(e.target.value)} placeholder={rowsPerPage}></input>
                    <label>{currentPage}</label>
                    <button onClick={prevPageHandler} className="page-change-btn">&lt;</button>
                    <button onClick={nextPageHandler} className="page-change-btn">&gt;</button>
                </div>
            </div>
        </>
    )
}

export default ProductPage