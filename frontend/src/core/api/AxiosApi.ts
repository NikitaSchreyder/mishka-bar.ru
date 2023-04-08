import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://192.168.100.26:3007/api/'
})

export const axiosApi = axiosInstance