import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

export const useLogin = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const req = await projectAuth.signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN", payload: req.user });

      if (!req.user) {
        throw new Error("Could login this user");
      }

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  return { login, isPending, error };
};

export default useLogin;
