import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://192.168.100.26/api/'
})

export const axiosApi = axiosInstance