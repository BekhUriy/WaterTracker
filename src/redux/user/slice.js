import { createSlice } from '@reduxjs/toolkit';
import { updateApiThunk } from './thunk';

const initialState = {

};

const updateSlice = createSlice({
  name: 'updateSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateApiThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const updateReducer = updateSlice.reducer;