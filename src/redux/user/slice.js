import { createSlice } from '@reduxjs/toolkit';

import {
  updatePassworsThunk,
  updateAvatarThunk,
  updateNameGenderThunk,
  userThunk,
} from './thunk';

const initialState = {
  message: '',
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
      .addCase(updatePassworsThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(updateNameGenderThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.user.name = payload.user.name;
        state.user.gender = payload.user.gender;
      });
  },
});

export const userReducer = useSlice.reducer;
