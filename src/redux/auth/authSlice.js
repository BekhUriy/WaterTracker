import {createSlice} from '@reduxjs/toolkit';
import {currentThunk, loginThunk, logoutThunk, refreshThunk, signUpThunk} from './thunk';

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state, {payload}) => {
    state.isLoading = true;
    state.error = payload;
}

const initialState = {
    token: '', // if response ok
    user: null, // if response ok
    message: '', // if response ok message olways from beck
    isLogin: false, // refreshing page
    isLoading: false, // loader
    error: null, // error if bad response
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // pending
            .addCase(signUpThunk.pending, handlePending)
            .addCase(loginThunk.pending, handlePending)
            .addCase(logoutThunk.pending, handlePending)
            .addCase(currentThunk.pending, handlePending)
            // fulfilled
            .addCase(signUpThunk.fulfilled, (state, {payload}) => {
                state.message = payload.message;
            })
            .addCase(loginThunk.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.isLogin = true;
                state.token = payload.token;
                state.user = payload.user;
                state.message = payload.message;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
                state.isLogin = false;
                state.token = null;
                state.user = null;
                state.message = null;
            })
            .addCase(currentThunk.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.isLogin = true;
                console.log(payload)
            })
            // rejected
            .addCase(signUpThunk.rejected, handleRejected)
            .addCase(loginThunk.rejected, handleRejected)
            .addCase(logoutThunk.rejected, handleRejected)
            .addCase(currentThunk.rejected, handleRejected)
    }
});

export const authReducer = authSlice.reducer;
