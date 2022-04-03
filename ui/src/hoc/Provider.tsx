import React, { useState } from "react";
import api from "../api";
import { StoreContext } from "../hooks/useStore";
import { LoginRequest, LoginResponse, VoidFunction } from "../types";
import { IMessage, IUser } from "../types/models";

const sampleUser = { name: "Treasure", phoneNumber: "098765456789" };
const sampleReciepients = [
  { name: "Trex", phoneNumber: "098765456789" },
  { name: "Ben", phoneNumber: "098765456789" },
  { name: "Lenon", phoneNumber: "098765456789" },
];

const sampleMessages: IMessage[] = [
  {
    message: "Hi its me",
    sender: sampleUser,
    createdAt: new Date(),
  },
  {
    message: "Hi its me",
    sender: sampleReciepients[0],
    createdAt: new Date(),
  },
];

type UIUser = IUser | undefined;
type NIUser = IUser | null;

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [currentReciepient, setReciepient] = useState<UIUser>();
  const [reciepients, setReciepients] = useState<IUser[]>(sampleReciepients);
  const [chats, setChats] = useState<IMessage[]>(sampleMessages);
  const [user, setUser] = useState<NIUser>(sampleUser);
  const [loading, setLoading] = useState<boolean>(false);

  // setInterval(() => {
  //   setChats((data) => ([...data, sampleMessages[Math.floor(Math.random() * 2)]]))
  // }, 5000)

  React.useEffect(() => {
    console.log(currentReciepient);
  }, [currentReciepient]);

  const loadState = {
    loading,
    toggleLoading: (key: boolean) => {
      setLoading(() => key);
    },
  };

  const auth = {
    user,
    signin: (data: LoginRequest, callback: VoidFunction) => {
      loadState.toggleLoading(true);
      api
        .login(data)
        .then((data) => {
          api.saveToken(data.jwt);
          setUser(data.data);
          callback();
        })
        .catch((err: any) => {
          alert(err.message);
        })
        .finally(() => {
          loadState.toggleLoading(false);
        });
    },
    signout: (callback: VoidFunction) => {},
    register: (callback: VoidFunction) => {},
  };

  const dashboard = {
    chats,
    reciepients,
    currentReciepient,
    setReciepient: (reciepient: IUser) => {
      setReciepient(reciepient);
    },
    getOnlineReciepients: () => {},
    sendMessage: (message: string) => { alert(message)},
    getChats: () => {},
  };

  const store = {
    loadState,
    dashboard,
    auth,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export default Provider;
