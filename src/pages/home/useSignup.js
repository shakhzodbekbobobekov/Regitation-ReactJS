import { useState } from "react";
import { porojectAuth } from "../../components/firebase/config";

export const useSignup = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    setIsPending(true);
    try {
      const req = await porojectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log(req.user);

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
