import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.config";

const initFirebaseAuth = () => {
  initializeApp(firebaseConfig);
};

export default initFirebaseAuth;
