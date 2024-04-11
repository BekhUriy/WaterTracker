import { createSlice } from '@reduxjs/toolkit';

import {
  updatePassworsThunk,
  updateAvatarThunk,
  updateNameGenderThunk,
  userThunk,
} from './thunk';

const handlePending = (state) => {
  state.isLoading = true;
  state.message = '';
  state.isError = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.message = payload.message;
  state.isError = true;
};

const initialState = {
  isLoading: false,
  message: '',
  isError: false,
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
  reducers: {
    clearMessage: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // pinding
      .addCase(userThunk.pending, handlePending)
      .addCase(updatePassworsThunk.pending, handlePending)
      .addCase(updateAvatarThunk.pending, handlePending)
      .addCase(updateNameGenderThunk.pending, handlePending)
      // fullfiled
      .addCase(userThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.gender = payload.user.gender;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.waterRate = payload.user.waterRate;
      })
      .addCase(updatePassworsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.message = payload.message;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.message = payload.message;
        state.user.avatarURL = payload.user.avatarURL;
      })
      .addCase(updateNameGenderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.message = payload.message;
        state.user.name = payload.user.name;
        state.user.gender = payload.user.gender;
      })
      // rejected
      .addCase(userThunk.rejected, handleRejected)
      .addCase(updateAvatarThunk.rejected, handleRejected)
      .addCase(updateNameGenderThunk.rejected, handleRejected)
      .addCase(updatePassworsThunk.rejected, handleRejected);
  },
});

export const userReducer = useSlice.reducer;
export const { clearMessage } = useSlice.actions;
