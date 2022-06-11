import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useLogin = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const req = await projectAuth.signInWithEmailAndPassword(email, password);

      console.log(req.user);

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
