import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://mishkabar.localhost/'
})

export const axiosApi = axiosInstance