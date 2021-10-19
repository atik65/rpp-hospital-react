import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const firebaseProvider = createContext();

const AuthProvider = ({ children }) => {
  return (
    <firebaseProvider.Provider value={useFirebase()}>
      {children}
    </firebaseProvider.Provider>
  );
};

export default AuthProvider;
