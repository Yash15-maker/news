import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6SI96oGF82eIcKcefAY55e2UTGEdUepM",
  authDomain: "newsapp-212d7.firebaseapp.com",
  projectId: "newsapp-212d7",
  storageBucket: "newsapp-212d7.appspot.com",
  messagingSenderId: "420738792607",
  appId: "1:420738792607:web:83dfb9222c12dc333436aa",
  measurementId: "G-QMGPKWQCY5",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  googleAuthProvider,
  signInWithPopup,
  signOut,
};
