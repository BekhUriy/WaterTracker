import axios from 'axios';

import {baseURL} from '../constants/urls.js';
import {store} from '../store.js';

const apiServices = axios.create({baseURL});

apiServices.interceptors.request.use(request => {
    const token = store.getState().auth.token;
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
        store.subscribe(() => {
            const newToken = store.getState().auth.token;
            if (token !== newToken) {
                request.headers.Authorization = `Bearer ${newToken}`;
            }
        });
    }
    return request;
});

export {apiServices};
