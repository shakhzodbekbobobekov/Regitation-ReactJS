import { createContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const context = createContext(AuthContext);

  if (!context) {
    throw new Error(" useAuth must be in AuthContextProvider ");
  }

  return context;
};
