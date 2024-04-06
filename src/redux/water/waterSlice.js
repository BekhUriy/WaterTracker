import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getWaterPortionsThunk, EditPortionThunk, addPortionThunk } from './waterThunk.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = null;
  state.waterRecords = action.payload;
};
const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRecords.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRecords = state.waterRecords.filter(el => el.id !== action.payload.id);
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  waterRecords: [],
  waterMonth: [],
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'waterSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWaterPortionsThunk.fulfilled, handleFulfilled)
      .addCase(addPortionThunk.fulfilled, handleFulfilledAdd)
      .addCase(EditPortionThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.pending,
          addPortionThunk.pending,
          EditPortionThunk.pending,
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.rejected,
          addPortionThunk.rejected,
          EditPortionThunk.rejected,
        ),
        handleRejected,
      );
  },
});


export const waterReducer = waterSlice.reducer;