import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import initFirebaseAuth from "../firebase/initAuthenticaion";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

initFirebaseAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const history = useHistory();

  const auth = getAuth();

  //   sign in with google
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //   create user email and password
  const RegisterWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   log in with email function
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign out funciton

  const logOut = () => {
    signOut(auth)
      .then((result) => {
        Swal.fire("", "User Log Out successful!", "success");
      })
      .catch((error) => {
        // sweet alert func
        Swal.fire("Opps!", "Log Out Failed! Please Try Again", "error");
      });
  };

  //   on auth state change function

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
        setError("");
      }

      setLoading(false);
    });
  }, []);

  return {
    user,
    loading,
    logIn,
    logOut,
    googleSignIn,
    RegisterWithEmail,
  };
};

export default useFirebase;
