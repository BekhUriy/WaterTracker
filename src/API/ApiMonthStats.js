import { apiServices } from './apiServices.js';
import { urls } from '../constants/urls.js';

export const getMonthStateApi = async (date) => {
  const { data } = await apiServices.get(urls.month(date));
  return data;
};

