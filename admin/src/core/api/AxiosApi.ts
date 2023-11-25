import axios, { AxiosInstance } from "axios"

class AxiosApi {
  public readonly axiosInstance: AxiosInstance

  constructor(authToken?: string) {
    this.axiosInstance = axios.create({
      baseURL: '/api',
      headers: {
        Authorization: authToken || '123'
      },
      withCredentials: true
    })
  }
}

export const axiosApi = (authToken?: string) => new AxiosApi(authToken).axiosInstance