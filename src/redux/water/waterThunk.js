import { createAsyncThunk } from '@reduxjs/toolkit';

import { getWaterPortionsList, editWaterPortion, addWaterPortion } from '../../API/waterApi.js';

export const getWaterPortionsThunk = createAsyncThunk(
  'water/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getWaterPortionsList();
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
  async (id, { rejectWithValue }) => {
    try {
      return await editWaterPortion(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);