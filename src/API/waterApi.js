import { apiServices } from './apiServices.js';
import { urls } from '../constants/urls.js';

export const getWaterPortionsList = async () => {
  const { data } = await apiServices.get(urls.waters.today);
  return data;
};

export const getWaterPortion = async (id) => {
  const { data } = await apiServices.get(urls.waters.waterById(id));
  return data;
};

export const addWaterPortion = async (body) => {
  const { data } = await apiServices.post(urls.waters.water, body);
  return data;
};

export const editWaterPortion = async (id, body) => {
await apiServices.patch(urls.waters.waterById(id), body);
  // return data;
  
};

export const deletePortion = async (id) => {
 await apiServices.delete(urls.waters.waterById(id));
  return id;
};

export const editDailyNorma = async (body) => {
  const { data } = await apiServices.patch(urls.waters.waterRate, body);
  return data;
};

export const getMonthStateApi = async (date) => {
  const { data } = await apiServices.get(urls.waters.month(date));
  return data;
};
