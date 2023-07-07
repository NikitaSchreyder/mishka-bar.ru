import axios, { AxiosInstance } from "axios"

class AxiosApi {
    private readonly token: string
    public readonly axiosInstance: AxiosInstance

    constructor() {
        this.token = '123'
        this.axiosInstance = axios.create({
            baseURL: 'http://mishkabar.localhost/api/',
            headers: {
                Authorization: this.token
            }
        })
    }
}

export const axiosApi = new AxiosApi().axiosInstance