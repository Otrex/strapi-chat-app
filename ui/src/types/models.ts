export interface IUser {
  name: string;
  phoneNumber: string;
}

export interface IMessage {
  createdAt: Date;
  message?: string;
  sender?: IUser;
}
