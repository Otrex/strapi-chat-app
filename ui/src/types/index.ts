import { IMessage, IUser } from "./models";

export type LocationState =
  | {
      from?: {
        pathname?: string;
      };
    }
  | undefined;

export type LoadingStore = {
  loading: boolean;
  toggleLoading: (key: boolean) => void;
};

export interface StoreContextType {
  loadState: LoadingStore;
  dashboard: DashboardContextType;
  auth: AuthContextType;
}

export type UserShortDetailProps = {
  img?: string;
  user: IUser;
  lastMsg?: IMessage;
  msgCount?: number;
  setReciepient?: any;
};

export enum RequestMethod {
  GET = "get",
  POST = "post",
}

export interface Request {
  data?: Record<string, any>;
  url: string;
  params?: any;
  method: RequestMethod;
  headers?: Record<string, number | string | boolean>;
}

export interface AuthContextType {
  user: IUser | null;
  register: (data: any, callback: VoidFunction) => void;
  signin: (data: LoginRequest, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export interface DashboardContextType {
  chats: IMessage[];
  reciepients: IUser[] | Partial<IUser>[];
  currentReciepient?: IUser | Partial<IUser>;
  setReciepient: (user: IUser) => void;
  getChats: (callback?: VoidFunction) => void;
  sendMessage: (message: string) => void;
  getOnlineReciepients: (callback?: VoidFunction) => void;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VoidFunction<T = any> {
  (err?: null | Error | any, data?: T): void;
}

export type ApiConfig = {
  baseURL: string;
};

export interface LoginResponse {
  jwt: string;
  data: IUser;
}
