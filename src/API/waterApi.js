import { apiServices } from './apiServices.js';

export const getWaterPortionsList = async () => {
  const { data } = await apiServices.get('/today');
  return data;
};

export const addWaterPortion = async (body) => {
  console.log('body for post add water', body);
  const { data } = await apiServices.post('/water', body);
  console.log('return addWaterPortion', data);
  return { data };
};
export const editWaterPortion = async (id, body) => {
  const { data } = await apiServices.patch(`/water/${id}`, body);
  return { data };
};
export const deletePortion = async (id) => {
   const { data } = await apiServices.delete(`/water/${id}`);
  console.log('return addWaterPortion', data);
  return { data };
};

//////////////////////////DailyNorma

// export const getDailyNorma = async () => {
//   const { data } = await apiServices.get('/user');
//   return data;
// };
export const editDailyNorma = async (body) => {
  const { data } = await apiServices.patch(`/waterRate`, body);
  return { data };
}