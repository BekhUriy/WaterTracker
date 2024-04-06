import { apiServices } from './apiServices.js';

export const getWaterPortionsList = async () => {
  const { data } = await apiServices.get('/today');
  return data;
};

export const addWaterPortion = async (body) => {
  console.log('body for post add water', body);
  const { data } = await apiServices.post('/water', body);
  console.log('return addWaterPortion', date);
  return { data };
};

export const editWaterPortion = async (id) => {
  const { data } = await apiServices.patch(`/water/${id}`);
  return { data };
};