import { apiServices } from './apiServices';

export const updateNameGenderApi = async (updates) => {
  const { data } = await apiServices.patch('user/update', updates);
  return data;
};

export const updateAvatarApi = async (avatarURL) => {
  const { data } = await apiServices.patch('user/avatar', avatarURL);
  return data;
};

export const updatePassApi = async (pass) => {
  const { data } = await apiServices.patch('auth/updatepassword', pass);
  return data;
};
