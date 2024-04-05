import {apiServices} from "./apiServices.js";

export const signUpApi = async (body) => {
    const {data} = await apiServices.post('auth/signup', body)
    return data
}

export const loginApi = async (body) => {
    const {data} = await apiServices.post('auth/login', body)
    return data
}

export const refreshApi = async () => {
    const {data} = await apiServices.post('auth/current')
    return data
}

export const logoutApi = async () => {
    const {data} = await apiServices.post('auth/logout')
    return data;
};

export const currentApi = async () => {
    const {data} = await apiServices.get("auth/current")
    return data
}

// ????????????????????????????????  no understand

export const updateProfileApi = async (_, updates) => {
    const {data} = await apiServices.put('auth/profile', updates,);
    return data;
};
