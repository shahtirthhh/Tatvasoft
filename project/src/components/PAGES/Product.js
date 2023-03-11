import React from 'react';
import '../CSS/productPage.css';
import '../UI/CSS/greenBtn.css'
import '../UI/CSS/redBtn.css'
function Product(props) {
    const { product } = props;
    return (
        <>
            <div className='product-page-product-row'>
                <div className='product-page-product-data'>{product.id}</div>
                <div className='product-page-product-data'>{product.title}</div>
                <div className='product-page-product-data'>{product.font}</div>
                <div className='product-page-product-data'>{product.Query}</div>
                <div className='product-page-product-data'>
                    <div className='product-page-button-container'>
                        <button className='editButton'>Edit</button>
                        <button className='deleteButton'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product