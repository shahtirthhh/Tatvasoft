import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth-slice';
import bookReducer from './books-slice';
import userReducer from './users-slice';
import cartReducer from './cart-slice';


const store = configureStore({
    reducer: { auth: authReducer, books: bookReducer, users: userReducer, cart: cartReducer }
})
export default store;