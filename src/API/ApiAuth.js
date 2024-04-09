import { urls } from '../constants/urls.js';
import { apiServices } from './apiServices.js';

export const signUpApi = async (body) => {
  const { data } = await apiServices.post(urls.auth.singup, body);
  return data;
};

export const loginApi = async (body) => {
  const { data } = await apiServices.post(urls.auth.singin, body);
  return data;
};

export const logoutApi = async () => {
  const { data } = await apiServices.post(urls.auth.logout);
  return data;
};

export const currentApi = async () => {
  const { data } = await apiServices.get(urls.auth.current);
  return data;
};
