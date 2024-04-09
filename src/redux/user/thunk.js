import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateNameGenderApi,
  updateAvatarApi,
  updatePassApi,
  userApi,
} from '../../API/ApiUser';

export const userThunk = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue }) => {
    try {
      return await userApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateNameGenderThunk = createAsyncThunk(
  'user/updateNameGenderThunk',
  async (formData, { rejectWithValue }) => {
    try {
      return await updateNameGenderApi(formData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'user/updateAvatarThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await updateAvatarApi(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// auth todo
export const updatePassworsThunk = createAsyncThunk(
  'auth/updatePassworsThunk',
  async (data, { rejectWithValue }) => {
    try {
      return await updatePassApi(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
