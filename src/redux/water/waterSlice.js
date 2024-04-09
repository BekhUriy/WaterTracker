import { createSlice } from '@reduxjs/toolkit';

import {
  getWaterPortionsThunk,
  EditPortionThunk,
  addPortionThunk,
  deletePortionThunk,
  monthStatsThunk,
} from './waterThunk.js';

const handleFulfilled = (state, { payload }) => {
  state.waterRecords.percentageOfWaterConsumption =
    payload.percentageOfWaterConsumption;
  state.waterRecords.waterRecords = payload.waterRecords;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.waterRecords.waterRecords.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.waterRecords.waterRecords = state.waterRecords.waterRecords.filter(
    (el) => el._id !== payload
  );
};

const handleFulfilledEdit = (state, { payload }) => {
  const editedRecord = payload;
  state.waterRecords.waterRecords = state.waterRecords.waterRecords.map(
    (water) => {
      if (water._id === editedRecord._id) {
        return editedRecord;
      }
      return water;
    }
  );
};

const handleFulfilledMonthGet = (state, { payload }) => {
  state.monthStats = payload;
};

const initialState = {
  waterRecords: {
    percentageOfWaterConsumption: 0,
    waterRecords: [],
  },
  monthStats: [],
  forceRender: false,
};

const waterSlice = createSlice({
  name: 'waterSlice',
  initialState,
  reducers: {
    forceRender: (state, { payload }) => {
      state.forceRender = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWaterPortionsThunk.fulfilled, handleFulfilled)
      .addCase(addPortionThunk.fulfilled, handleFulfilledAdd)
      .addCase(deletePortionThunk.fulfilled, handleFulfilledDelete)
      .addCase(EditPortionThunk.fulfilled, handleFulfilledEdit)
      .addCase(monthStatsThunk.fulfilled, handleFulfilledMonthGet);
  },
});

export const { forceRender } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
