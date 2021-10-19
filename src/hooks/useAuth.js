import { useContext } from "react";
import { firebaseProvider } from "../contexts/AuthProvider";

const useAuth = () => {
  return useContext(firebaseProvider);
};

export default useAuth;
