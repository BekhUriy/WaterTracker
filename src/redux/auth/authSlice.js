import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, signUpThunk } from './thunk';

const initialState = {
  token: '',
  user: null,
  isLogin: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.user = null;
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.message = payload.message;
        state.isLogin = true;

      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.message = payload;
        state.isLogin = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.token = '';
        state.message = null;
        state.isLogin = false;

      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
