import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateApi } from '../../API/ApiUser';

export const updateApiThunk = createAsyncThunk(
  'updateApiThunk',
  async (updates, thunkAPI) => {
    try {
      return await updateApi(updates);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);