import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getWaterPortionsList,
  editWaterPortion,
  addWaterPortion,
  deletePortion,
  editDailyNorma,
  getMonthStateApi,
} from '../../API/waterApi.js';

export const getWaterPortionsThunk = createAsyncThunk(
  'water/getDayPortions',
  async (body, { rejectWithValue }) => {
    try {
      return await getWaterPortionsList(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPortionThunk = createAsyncThunk(
  'water/addPortion',
  async (data, { rejectWithValue }) => {
    try {
      return await addWaterPortion(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const EditPortionThunk = createAsyncThunk(
  'water/editPortion',
  async (body, { rejectWithValue }) => {
    try {
      return await editWaterPortion(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePortionThunk = createAsyncThunk(
  'water/deletePortion',
  async (id, { rejectWithValue }) => {
    try {
      return await deletePortion(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editDailyNormaThunk = createAsyncThunk(
  'waterRate/editDailyNorma',
  async (data, { rejectWithValue }) => {
    try {
      return await editDailyNorma(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const monthStatsThunk = createAsyncThunk(
  'monthStatsThunk',
  async (date, thunkAPI) => {
    try {
      return await getMonthStateApi(date);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
