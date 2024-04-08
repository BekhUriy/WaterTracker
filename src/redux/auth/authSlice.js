import {createSlice} from "@reduxjs/toolkit";
import {currentThunk, loginThunk, logoutThunk, signUpThunk} from "./thunk";

const initialState = {
    token: "", // if response ok
    user: null, // if response ok
    message: "", // if response ok message always from beck
    isLogin: false, // refreshing page
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fulfilled
            .addCase(signUpThunk.fulfilled, (state, {payload}) => {
                state.message = payload.message;
                state.token = payload.token;
            })
            .addCase(loginThunk.fulfilled, (state, {payload}) => {
                state.isLogin = true;
                state.token = payload.token;
                state.user = payload.user;
                state.message = payload.message;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.isLogin = false;
                state.token = "";
                state.user = null;
                state.message = "";
            })
            .addCase(currentThunk.fulfilled, (state, {payload}) => {
                state.isLogin = true;
                state.message = payload.message;
                state.user = payload.user;
            })
            // rejected
            .addCase(currentThunk.rejected, (state, {payload}) => {
                state.isLogin = false;
                state.message = payload;
                state.token = "";
                state.user = null;
            });
    },
});

export const authReducer = authSlice.reducer;
