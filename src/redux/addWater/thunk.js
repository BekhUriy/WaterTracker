import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiServices } from '../../API/apiServices.js';


export const fetchWaterPortionsList = async () => {
  try {
    const { data } = await apiServices.get('api/water');
    console.log(data);
    return data;
  } catch (error) {
    return console.log(error);
  }
};
export const addWaterPortion = async ({ portion }) => {
  try {
    const { data } = await apiServices.post('api/water', portion);
    return { data };
  } catch (error) {
    console.log(error);
  }
};
export const deleteWaterPortion = async id => {
  try {
    const { data } = await apiServices.delete(`api/water/${id}`);
    return { data };
  } catch (error) {
    console.log(error);
  }
};

export const editWaterPortion = async id => {
  try {
    const { data } = await apiServices.patch(`api/water/${id}`);
    return { data };
  } catch (error) {
    console.log(error);
  }
};
export const getWaterPortionsThunk = createAsyncThunk(
  'water/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchWaterPortionsList();
    } catch (error) {
      return rejectWithValue(error.message);
    }

  },
);
export const addPortionThunk = createAsyncThunk(
  'water/addPortion',
  portion => addWaterPortion({ portion }),
);
export const deletePortionThunk = createAsyncThunk(
  'water/deletePortion',
  id => deletePortionThunk(id),
);
export const EditPortionThunk = createAsyncThunk(
  'water/editPortion',
  id => editWaterPortion(id),
);