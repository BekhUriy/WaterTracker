const baseURL = 'https://watertrackerbackend-uo3w.onrender.com/api/';

const urls = {
  waters: {
    today: (date)=> `today?date=${date}`,
    water: 'water',
    waterById: (id) => `water/${id}`,
    waterRate: 'waterrate',
    month: (date) => `month?date=${date}`,
  },
};

export { baseURL, urls };
