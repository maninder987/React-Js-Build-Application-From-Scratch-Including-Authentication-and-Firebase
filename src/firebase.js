import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHlzI4ouMtB99QFIUWG89PA_IDvy2bz8o",
  authDomain: "disney-f70e7.firebaseapp.com",
  databaseURL: "https://disney-f70e7-default-rtdb.firebaseio.com",
  projectId: "disney-f70e7",
  storageBucket: "disney-f70e7.appspot.com",
  messagingSenderId: "641582038306",
  appId: "1:641582038306:web:934f95010c31646243397b",
  measurementId: "G-HYEGJN6S29",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
