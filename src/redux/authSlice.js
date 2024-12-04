import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        userId: null,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.userId = action.payload.userId || null;
        },
        logout: (state) => {
            state.token = null;
            state.userId = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
