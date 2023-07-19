import React from 'react'
import ReactLoading from 'react-loading';
import './CSS/spinner.css'
export default function Spinner() {
    return (
        <div className='spinner'>
            <ReactLoading type="spin" color='#f14d54' height='100px' width='100px' />
        </div>
    )
}
