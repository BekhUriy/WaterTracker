import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://watertrackerbackend-uo3w.onrender.com/api/',
});
export const signUpApi = async (body) => {
	const  {data } = await authApi.post('auth/signup', body)
	return data
}

export const loginApi = async (body) => {
	const { data } = await authApi.post('auth/login', body)
	return data
}

export const refreshApi = async (token) => {
	const { data } = await authApi.post('auth/current', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return data
}



export const logoutApi = async (token) => {
  try {
    const { data } = await authApi.post(
      'auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error in logoutApi:', error);
    throw error;
  }
};