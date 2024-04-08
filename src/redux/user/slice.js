import { createSlice } from '@reduxjs/toolkit';
import { updateApiThunk, updateAvatarApiThunk } from './thunk';

const initialState = {
  message: '',
};

const updateSlice = createSlice({
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

export const updateReducer = updateSlice.reducer;
