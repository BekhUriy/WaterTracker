import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  EditPortionThunk,
  addPortionThunk,
  deletePortionThunk,
  getWaterPortionsThunk,
} from './thunk';

const InitialState = {
  waterRecords: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
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
  isLoading: false;
  error: null;
};

export const addWaterSlice = createSlice({
  name: 'waterRecords',
  initialState: InitialState,
  extraReducers: builder => {
    builder
      .addCase(getWaterPortionsThunk.fulfilled, handleFulfilled)
      .addCase(addPortionThunk.fulfilled, handleFulfilledAdd)
      .addCase(deletePortionThunk.fulfilled, handleFulfilledDelete)
      .addCase(EditPortionThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.pending,
          addPortionThunk.pending,
          deletePortionThunk.pending,
          EditPortionThunk.pending,
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.rejected,
          addPortionThunk.rejected,
          deletePortionThunk.rejected,
          EditPortionThunk.rejected,
        ),
        handleRejected,
      );
  },
});
export const waterRecordsReducer = addWaterSlice.reducer;
