import React from "react";
import api from "../api";
import { StoreContext } from "../hooks/useStore";
import { LoginRequest, LoginResponse, VoidFunction } from "../types";
import { IUser } from "../types/models";

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<IUser| null>(null);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const toggleLoading = (key: boolean) => {
    setLoading(() => key)
  };

  const signin = (data: LoginRequest, callback: VoidFunction) => {
    toggleLoading(true);
    return api.login(data).then((data) => {
      api.saveToken(data.jwt);
      setUser(data.data);
      toggleLoading(true);
      callback();
    })
    .catch((err: any) => {
      alert(err.message)
    })
    .finally(()=> {
      toggleLoading(true);
    })
  };

  const register = (data: any, callback: VoidFunction) => {
    return
  }

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const loadState = {
    loading,
    toggleLoading
  };

  const auth = {
    user,
    signin,
    signout,
    register 
  };

  const store = {
    loadState,
    auth
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
export default Provider;