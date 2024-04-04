import axios from 'axios';
import { urls } from '../constants/urls.js';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGM1YWZhOWY2MjU2ZjE2MjY0N2IzOSIsImlhdCI6MTcxMjIxODI5MiwiZXhwIjoxNzE0ODEwMjkyfQ.gMdNhWpvfJM-AqFLc6BT7K68-urxliU-j7Q6X_XORy4';

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

