import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const changeAuth = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeAuth, {
    user: null,
  });

  console.log("AuthContext USER", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
