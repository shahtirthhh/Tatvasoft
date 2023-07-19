import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: localStorage.getItem('user') ? true : false,
        pw: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).password : '',
        id: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null,
        role: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).role : ""
    },
    reducers: {
        login: (state, action) => {
            state.auth = true;
            state.pw = action.payload.pw;
            state.role = action.payload.role;
            state.id = action.payload.id;
        },
        logout: (state) => {
            state.auth = false;
            state.role = ""
            state.pw = ""
            state.id = null
        }
    }
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
