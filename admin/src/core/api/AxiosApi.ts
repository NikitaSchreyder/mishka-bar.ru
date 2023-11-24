import axios, { AxiosInstance } from "axios"

class AxiosApi {
  public readonly axiosInstance: AxiosInstance

  constructor(authToken?: string) {
    this.axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:3007/api',
      headers: {
        Authorization: authToken || '123'
      },
      withCredentials: true
    })
  }
}

export const axiosApi = (authToken?: string) => new AxiosApi(authToken).axiosInstance