import axios, { AxiosError, AxiosInstance } from "axios";
import { ApiConfig, LoginRequest, LoginResponse } from "../types";

enum RequestMethod {
  GET = 'get',
  POST = 'post'
}

export interface Request {
  data?: Record<string, any>,
  url: string,
  params?: any,
  method: RequestMethod,
  headers?: Record<string, number|string|boolean>
}
class Api {
  saveToken(jwt: string) {
    throw new Error("Method not implemented.");
  }
  baseURL: string;
  instance: AxiosInstance;
  token!: string;

  constructor({ baseURL }: ApiConfig) {
    this.baseURL = baseURL
    this.instance = axios.create({ baseURL });
  }

  private async jsonRequest <R extends Record<string, any>>({ data, params, url, method, headers }: Request) {
    const _headers = {
      ...(this.token ? { 'Authorization': this.token } : {}),
      ...headers
    }
    try {
      const res = await this.instance({
        data,
        url,
        params,
        method,
        headers: _headers
      })

      return res.data as R;
    } catch (err: any) {
      const error = err as AxiosError;
      return Promise.reject(error.message);
    }
  }

  public async request<R>(url: string, method: RequestMethod, data?: Record<string, any>) {
    return this.jsonRequest<R>({ data, method, url })
  }

  public async login(data: LoginRequest) {
    return this.request<LoginResponse>('/auth/login', RequestMethod.GET, data);
  }
}

export default new Api({
  baseURL: ''
})