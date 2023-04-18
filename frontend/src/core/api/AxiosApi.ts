import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.64:3007/api/'
})

export const axiosApi = axiosInstance