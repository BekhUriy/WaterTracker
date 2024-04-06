import { apiServices } from './apiServices';

export const updateApi = async (updates) => {
  const { data } = await apiServices.put(
    'user',
    updates,
  );
  return data;
};