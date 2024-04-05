import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://watertrackerbackend-uo3w.onrender.com';

export const fetchWaterPortionsList = async () => {
  try {
    const responce = await axios.get('api/water');
    console.log(responce.data);
    return responce.data;
  } catch (error) {
   return console.log(error)
  }
};
export const addWaterPortion = async ({portion }) => {
  try {
    const responce = await axios.post('api/water', portion);
    return responce.data;
  } catch (error) {
    console.log(error)
  }
};
export const deleteWaterPortion = async id => {
  try {
    const responce = await axios.delete(`api/water/${id}`);
    return responce.data;
  } catch (error) {
    console.log(error)
  }
};

export const editWaterPortion=async id=>{
  try {
    const responce = await axios.patch(`api/water/${id}`);
    return responce.data;
  } catch (error) {
   console.log(error) 
  }
}
export const getWaterPortionsThunk = createAsyncThunk(
  'water/fetchAll',
  async () => {
    return await fetchWaterPortionsList();
  }
);
export const addPortionThunk = createAsyncThunk(
  'water/addPortion',
  portion => addWaterPortion({ portion })
);
export const deletePortionThunk = createAsyncThunk(
  'water/deletePortion',
  id => deletePortionThunk(id)
);
export const EditPortionThunk = createAsyncThunk(
  'water/editPortion',
  id => editWaterPortion(id)
);