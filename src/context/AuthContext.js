import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: "ahror ustoz" }}>
      {children}
    </AuthContext.Provider>
  );
};
