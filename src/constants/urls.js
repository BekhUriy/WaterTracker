const baseURL = 'https://watertrackerbackend-uo3w.onrender.com/api/';

const urls = {
  auth: {
    singup: 'auth/signup',
    singin: 'auth/login',
    logout: 'auth/logout',
    current: 'auth/current',
  },
  user: {
    user: 'user',
    avatar: 'user/avatar',
    update: 'user/update',
  },
  waters: {
    today: (date) => `today?date=${date}`,
    water: 'water',
    waterById: (id) => `water/${id}`,
    waterRate: 'waterrate',
    month: (date) => `month?date=${date}`,
  },
};

export { baseURL, urls };
