// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtoaVznkEX4m40X3Nmc6tE33qJTMuJIgs",
  authDomain: "finance-tracker-17a0e.firebaseapp.com",
  projectId: "finance-tracker-17a0e",
  storageBucket: "finance-tracker-17a0e.appspot.com",
  messagingSenderId: "732503051688",
  appId: "1:732503051688:web:12de001b0138adb3b1e19d",
  measurementId: "G-PYG5P9QSS2",
};

// init fireStore
firebase.initializeApp(firebaseConfig);

// init serveise
const porojectAuth = firebase.auth();

export { porojectAuth };
