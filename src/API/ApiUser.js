import { urls } from '../constants/urls';
import { apiServices } from './apiServices';

export const userApi = async () => {
  const { data } = await apiServices.get(urls.user.user);
  return data;
};

export const updateNameGenderApi = async (updates) => {
  const { data } = await apiServices.patch(urls.user.update, updates);
  return data;
};

export const updateAvatarApi = async (avatarURL) => {
  const { data } = await apiServices.patch(urls.user.avatar, avatarURL);
  return data;
};

// todo

export const updatePassApi = async (pass) => {
  const { data } = await apiServices.patch('auth/updatepassword', pass);
  return data;
};
