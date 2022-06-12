import { projectAuth } from "../firebase/config";
import { useAuth } from "./useAuth";

export const useLogout = () => {
  const { dispatch } = useAuth();
  const logout = async () => {
    const req = await projectAuth.signOut();
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
