import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    setIsPending(true);
    try {
      const req = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log(req.user);

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  return { signup, isPending, error };
};
