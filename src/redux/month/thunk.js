// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getMonthStateApi } from '../../API/ApiMonthStats.js';

// export const monthStatsThunk = createAsyncThunk(
//   'monthStatsThunk',
//   async (date, thunkAPI) => {
//     try {
//       return await getMonthStateApi(date);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );