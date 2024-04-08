import { createSlice } from '@reduxjs/toolkit';
import {
  updatePassworsThunk,
  updateAvatarThunk,
  updateNameGenderThunk,
} from './thunk';

const initialState = {
  message: '',
};

const useSlice = createSlice({
  name: 'updateSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassworsThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(updateNameGenderThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
      });
  },
});

export const userReducer = useSlice.reducer;
