import React from 'react'
import Header from '../SECTIONS/Header'
import Footer from '../SECTIONS/Footer'
import Search from '../SECTIONS/Search';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function RootLayout({ baseUrl }) {
    return (
        <>
            <Header />
            <Search baseUrl={baseUrl} />
            <ToastContainer theme='colored' autoClose={500} />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout