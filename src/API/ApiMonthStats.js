import axios from 'axios';
import { urls } from '../constants/urls.js';

const token = '';

const config = {
  baseURL: urls.baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const apiMonthStats = axios.create(config);

export const getMonthStateApi = async (date) => {
  const { data } = await apiMonthStats(urls.month(date));
  return data;
};

