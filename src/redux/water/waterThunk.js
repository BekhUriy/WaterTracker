import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getWaterPortionsList,
  editWaterPortion,
  addWaterPortion,
  deletePortion,
  editDailyNorma,
  getWaterPortion,
  getMonthStateApi,
} from '../../API/waterApi.js';

export const getWaterPortionsThunk = createAsyncThunk(
  'water/getAllPortion',
  async (_, { rejectWithValue }) => {
    try {
      return await getWaterPortionsList();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getWaterPortionByIdThunk = createAsyncThunk(
  'water/getPortionById',
  async (id, { rejectWithValue }) => {
    try {
      return await getWaterPortion(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addPortionThunk = createAsyncThunk(
  'water/addPortion',
  async (data, { rejectWithValue }) => {
    try {
      return await addWaterPortion(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const EditPortionThunk = createAsyncThunk(
  'water/editPortion',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await editWaterPortion(id, data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deletePortionThunk = createAsyncThunk(
  'water/deletePortion',
  async (id, { rejectWithValue }) => {
    try {
      return await deletePortion(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editDailyNormaThunk = createAsyncThunk(
  'water/editDailyNorma',
  async (data, { rejectWithValue }) => {
    try {
      return await editDailyNorma(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const monthStatsThunk = createAsyncThunk(
  'water/getMonthStatsThunk',
  async (date, thunkAPI) => {
    try {
      return await getMonthStateApi(date);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
