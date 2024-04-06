// import { createSlice } from '@reduxjs/toolkit';
// import { monthStatsThunk } from './thunk.js';

// const initialState = {
//   monthStats: [],
// };

// const monthSlice = createSlice({
//   name: 'monthSlice',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(monthStatsThunk.fulfilled, (state, { payload }) => {
//       state.monthStats = payload;
//     });
//   },
// });

// export const monthReducer = monthSlice.reducer;