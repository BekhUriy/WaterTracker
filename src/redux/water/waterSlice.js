import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getWaterPortionsThunk,
  EditPortionThunk,
  addPortionThunk,
  deletePortionThunk,
  editDailyNormaThunk,
  monthStatsThunk,
  getWaterPortionByIdThunk,
} from './waterThunk.js';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRecords = action.payload;
};

const handleFulfilledGetById = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRecord = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRecords.waterRecords.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRecords = state.waterRecords.filter(
    (el) => el.id !== action.payload.id
  );
};

const handleFulfilledEdit = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const editedRecord = action.payload;
  state.waterRecords = state.waterRecords.map((water) => {
    if (water.id === editedRecord.id) {
      return editedRecord;
    }
    return water;
  });
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledEditDailyNorma = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.waterRate = action.payload;
};

const handleFulfilledMonthGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.monthStats = action.payload;
};

const initialState = {
  waterRecords: null,
  monthStats: [],
  waterRate: '',
  isLoading: false,
  error: null,
  waterRecord: null,
  forceRender: false,
};

const waterSlice = createSlice({
  name: 'waterSlice',
  initialState,
  reducers: {
    forceRender: (state) => {
      state.forceRender = !state.forceRender;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWaterPortionsThunk.fulfilled, handleFulfilled)
      .addCase(addPortionThunk.fulfilled, handleFulfilledAdd)
      .addCase(deletePortionThunk.fulfilled, handleFulfilledDelete)
      .addCase(EditPortionThunk.fulfilled, handleFulfilledEdit)
      .addCase(getWaterPortionByIdThunk.fulfilled, handleFulfilledGetById)
      .addCase(editDailyNormaThunk.fulfilled, handleFulfilledEditDailyNorma)
      .addCase(monthStatsThunk.fulfilled, handleFulfilledMonthGet)
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.pending,
          addPortionThunk.pending,
          EditPortionThunk.pending,
          deletePortionThunk.pending,
          getWaterPortionByIdThunk.pending,
          editDailyNormaThunk.pending,
          monthStatsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.rejected,
          addPortionThunk.rejected,
          EditPortionThunk.rejected,
          deletePortionThunk.rejected,
          getWaterPortionByIdThunk.rejected,
          editDailyNormaThunk.rejected,
          monthStatsThunk.rejected
        ),
        handleRejected
      );
  },
});

export const waterReducer = waterSlice.reducer;
export const { forceRender } = waterSlice.actions;
