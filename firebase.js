// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo1Cxp5k3_cqDxQpk13HNp-pOZZOeesIA",
  authDomain: "fir-auth-58ca9.firebaseapp.com",
  projectId: "fir-auth-58ca9",
  storageBucket: "fir-auth-58ca9.appspot.com",
  messagingSenderId: "720959427765",
  appId: "1:720959427765:web:633d2fdfe6d74f1544dafc"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);