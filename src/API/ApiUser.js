import { apiServices } from './apiServices';

export const updateApi = async (updates) => {
  const { data } = await apiServices.patch('user/update', updates);
  return data;
};

export const updateAvatarApi = async (avatarURL) => {
  const { data } = await apiServices.patch('user/avatar', avatarURL);
  return data;
};
