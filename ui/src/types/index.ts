import { IUser } from "./models";

export type LocationState = {
  from?: {
    pathname?: string
  }
} | undefined

export type LoadingStore = {
  loading: boolean,
  toggleLoading: (key: boolean) => void
}

export interface StoreContextType {
  loadState: LoadingStore
  auth: AuthContextType
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VoidFunction<T = any> {
  (err?: null| Error|any, data?: T): void
}

export interface AuthContextType {
  register: (data: any, callback: VoidFunction) => void;
  user: any;
  signin: (data: LoginRequest, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export type ApiConfig = {
  baseURL: string
}

export interface LoginResponse {
  jwt: string;
  data: IUser;
}