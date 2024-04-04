import axios from "axios";

import {baseURL} from "../constants/urls.js";

const token = localStorage.getItem('token')

const apiServices = axios.create({baseURL})

apiServices.interceptors.request.use(request => {
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {apiServices}
