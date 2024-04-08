const baseURL = 'https://watertrackerbackend-uo3w.onrender.com/api/';

const urls = {
  waters: {
    today: '/today',
    water: '/water',
    waterById: (id) => `/water/${id}`,
    waterRate: '/waterrate',
    month: (date) => `month?date=${date}`,
  },
};

export { baseURL, urls };
