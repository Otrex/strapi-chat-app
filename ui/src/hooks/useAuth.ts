import React from "react";
import { AuthContextType } from "../types";

export const AuthContext = React.createContext<AuthContextType>(null!);
const useAuth = () => React.useContext(AuthContext);
export default useAuth;

