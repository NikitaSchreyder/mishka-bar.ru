import axios, { AxiosInstance } from "axios"

class AxiosApi {
  public readonly axiosInstance: AxiosInstance

  constructor(authToken?: string) {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3007/api',
      headers: {
        Authorization: authToken || '123'
      }
    })
  }
}

export const axiosApi = (authToken?: string) => new AxiosApi(authToken).axiosInstance