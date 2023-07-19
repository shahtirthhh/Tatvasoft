import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: { users: [] },
    reducers: {
        updateUserState(state, action) {
            state.users = action.payload.users;
        },
        delete_user(state, action) {
            state.users.splice(state.users.findIndex(user => user.id == action.payload.id), 1);
        }
    }
});
export const userActions = userSlice.actions;
export default userSlice.reducer;