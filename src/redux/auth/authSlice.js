import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk, logoutThunk, signUpThunk } from './thunk';

const initialState = {
  token: '',
  message: '',
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fulfilled
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.token = payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLogin = true;
        state.token = payload.token;
        state.message = payload.message;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLogin = false;
        state.token = '';
        state.message = '';
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.isLogin = true;
        state.message = payload.message;
      })
      // rejected
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isLogin = false;
        state.message = payload;
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
