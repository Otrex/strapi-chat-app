import React from "react";
import { StoreContextType } from "../types";

export const StoreContext = React.createContext<StoreContextType>(null!);
const useStore = () => React.useContext(StoreContext);
export default useStore;
