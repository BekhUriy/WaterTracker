import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateApi, updateAvatarApi } from '../../API/ApiUser';

export const updateApiThunk = createAsyncThunk(
  'updateApiThunk',
  async (updates, avatarUrl, thunkAPI) => {
    try {
      return await updateApi(avatarUrl);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAvatarApiThunk = createAsyncThunk(
  'updateApiThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await updateAvatarApi(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
