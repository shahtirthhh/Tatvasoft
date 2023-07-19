import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: { books: [] },
    reducers: {
        updateBookState(state, action) {
            state.books = action.payload.books;
        }
    }
});
export const bookActions = bookSlice.actions;
export default bookSlice.reducer;