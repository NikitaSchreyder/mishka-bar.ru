import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://192.168.31.108:3007/api/'
})

export const axiosApi = axiosInstance