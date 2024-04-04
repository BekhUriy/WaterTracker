import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, refreshApi, signUpApi, logoutApi, updateProfileApi } from '../../API/ApiAuth';


export const signUpThunk = createAsyncThunk('auth/signup', async (body, { rejectWithValue }) => {
	try {
		const user = await signUpApi(body);
		console.log(user);
		const data = await loginApi(body);
		return data
	} catch (error) {
		return rejectWithValue(error.response.data.error);
	}
				
})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
	try {
		const data = await loginApi(body)
		console.log(data);
		return data
	} catch (error) {
		console.log(error.response.data.error);
		return rejectWithValue(error.response.data.error)
	}
})

export const refreshThunk = createAsyncThunk(
	'auth/current',
	async (_, { rejectWithValue, getState }) => {
		try {
			return await refreshApi(getState().auth.token)
		} catch (error) {
			return rejectWithValue(error.response.data.error)
		}
	}
)


export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      await logoutApi(token);
      return null;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const updateProfileThunk = createAsyncThunk(
  'auth/updateProfile',
  async (updates, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const updatedProfile = await updateProfileApi(token, updates);
      return updatedProfile;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);