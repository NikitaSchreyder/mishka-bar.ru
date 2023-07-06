import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://mishkabar.localhost/api/'
})

export const axiosApi = axiosInstance