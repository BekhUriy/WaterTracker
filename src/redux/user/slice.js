import { createSlice } from '@reduxjs/toolkit';

import {
  updatePassworsThunk,
  updateAvatarThunk,
  updateNameGenderThunk,
  userThunk,
} from './thunk';

const initialState = {
  message: '',
  errPassMes: null,
  user: {
    name: '',
    email: '',
    avatarURL: '',
    gender: '',
    waterRate: 0,
  },
};

const useSlice = createSlice({
  name: 'updateSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.gender = payload.user.gender;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.waterRate = payload.user.waterRate;
      })
      .addCase(updatePassworsThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.errPassMes = null;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.user.avatarURL = payload.user.avatarURL;
      })
      .addCase(updateNameGenderThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.user.name = payload.user.name;
        state.user.gender = payload.user.gender;
      })
      .addCase(updatePassworsThunk.rejected, (state, { payload }) => {
        state.errPassMes = payload.message;
      });
  },
});

export const userReducer = useSlice.reducer;
