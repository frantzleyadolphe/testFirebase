// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo1Cxp5k3_cqDxQpk13HNp-pOZZOeesIA",
  authDomain: "fir-auth-58ca9.firebaseapp.com",
  projectId: "fir-auth-58ca9",
  storageBucket: "fir-auth-58ca9.appspot.com",
  messagingSenderId: "720959427765",
  appId: "1:720959427765:web:633d2fdfe6d74f1544dafc",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };