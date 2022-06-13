import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuth } from "./useAuth";

export const useSignup = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();

  const signup = async (email, password, displayName) => {
    setIsPending(true);
    try {
      const req = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: "LOGIN", payload: req.user });

      if (!req.user) {
        throw new Error("Could create user");
      }

      await req.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  return { signup, isPending, error };
};

export default useSignup;
