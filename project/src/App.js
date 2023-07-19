// import Registration from './components/PAGES/Registration'


import Login from './components/PAGES/Login';
import Registration from './components/PAGES/Registration';
import ProductPage from './components/PAGES/ProductPage';
import EditProduct from './components/PAGES/EditProduct';
import RootLayout from './components/PAGES/RootLayout';
import BookListing from './components/PAGES/BookListing';
import ErrorPage from './components/PAGES/ErrorPage';
import AddProduct from './components/PAGES/AddProduct';
import UpdateProfile from './components/PAGES/UpdateProfile';
import UsersPage from './components/PAGES/UsersPage';
import EditUser from './components/PAGES/EditUser';
import CatergoriesPage from './components/PAGES/CatergoriesPage';
import EditCategory from './components/PAGES/EditCategory';
import AddCategory from './components/PAGES/AddCategory';
import Spinner from './components/UI/Spinner';
import CartPage from './components/PAGES/CartPage';


import { cartActions } from './redux-store/cart-slice';


import React from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const BASEURL = 'https://book-e-sell-node-api.vercel.app';
// let AUTH;
const r = createBrowserRouter([
  {
    path: '/', element: <RootLayout baseUrl={BASEURL} />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Registration baseUrl={BASEURL} /> },
      { path: 'login', element: <Login baseUrl={BASEURL} /> },
      { path: 'update-profile', element: <UpdateProfile baseUrl={BASEURL} /> },


      { path: 'categories', element: <CatergoriesPage baseUrl={BASEURL} /> },
      { path: 'categories/add-category', element: <AddCategory baseUrl={BASEURL} /> },
      { path: 'categories/edit-category/:category_id/:category_name', element: <EditCategory baseUrl={BASEURL} /> },


      { path: 'users', element: <UsersPage baseUrl={BASEURL} /> },
      { path: 'users/edit-user/:user_id', element: <EditUser baseUrl={BASEURL} /> },

      { path: 'cart', element: <CartPage baseUrl={BASEURL} /> },

      { path: 'product-page', element: <ProductPage baseUrl={BASEURL} /> },
      { path: 'product-page/edit-product/:product_id', element: <EditProduct baseUrl={BASEURL} /> },
      { path: 'product-page/add-product', element: <AddProduct baseUrl={BASEURL} /> },

      { path: 'book-listing', element: <BookListing baseUrl={BASEURL} /> },
    ]
  },
])



function App() {
  const dispatch = useDispatch();
  const AUTH = useSelector(state => state.auth.auth)
  const ID = useSelector(state => state.auth.id)
  const CART = useSelector(state => state.cart.cart)
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (AUTH && CART.length < 1) {
      setLoading(true);
      axios.get(`${BASEURL}/api/cart?userId=${ID}`)
        .then(res => {
          setLoading(false);
          return res.data;
        })
        .then(data => {
          dispatch(cartActions.store_cart({ cart: data.result }));
        })
        .catch(err => {
          setLoading(false);
          toast.error("Could not get cart !")
        })
    }
  }, [])
  return (
    <div className="App" >
      {isLoading && <Spinner />}
      <RouterProvider router={r}>  </RouterProvider>
    </div>)

}


export default App;
