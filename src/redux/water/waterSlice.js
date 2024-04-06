import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getWaterPortionsThunk, EditPortionThunk, addPortionThunk, deletePortionThunk, editDailyNormaThunk, monthStatsThunk } from './waterThunk.js';


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
const handleFulfilledEdit = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const editedRecord = action.payload;
  state.waterRecords = state.waterRecords.map(water => {
    if (water.id === editedRecord.id) {
    return editedRecord;
    }
    return water;
  });
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

/////////DailyNorma
// const handleFulfilledGetNorma = (state, action) => {
//   console.log(action.payload);
//   state.isLoading = false;
//   state.error = null;
//   state.dailyNorma = action.payload;
// };

const handleFulfilledEditDailyNorma = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.dailyNorma = action.payload;
}
///////Month
const handleFulfilledMonthGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.monthStats = action.payload;
}
const initialState = {
  waterRecords: [],
  monthStats: [],
  waterRate:"",
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
      .addCase(deletePortionThunk.fulfilled, handleFulfilledDelete)
      .addCase(EditPortionThunk.fulfilled, handleFulfilledEdit)
      // .addCase(getDailyNormaThunk.fulfilled, handleFulfilledGetNorma)
      .addCase(editDailyNormaThunk.fulfilled, handleFulfilledEditDailyNorma)
      .addCase(monthStatsThunk.fulfilled, handleFulfilledMonthGet)
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.pending,
          addPortionThunk.pending,
          EditPortionThunk.pending,
          deletePortionThunk.pending,
          // getDailyNormaThunk.pending,
          editDailyNormaThunk.pending,
          monthStatsThunk.pending
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          getWaterPortionsThunk.rejected,
          addPortionThunk.rejected,
          EditPortionThunk.rejected,
          deletePortionThunk.rejected,
          // getDailyNormaThunk.rejected,
          editDailyNormaThunk.rejected,
          monthStatsThunk.rejected
        ),
        handleRejected,
      );
  },
});


export const waterReducer = waterSlice.reducer;