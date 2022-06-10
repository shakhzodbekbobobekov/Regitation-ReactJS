import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl2jF0_L41Q_8TTGVRgpevVhISZb91uFM",
  authDomain: "finance-tracker-8a451.firebaseapp.com",
  projectId: "finance-tracker-8a451",
  storageBucket: "finance-tracker-8a451.appspot.com",
  messagingSenderId: "437316473250",
  appId: "1:437316473250:web:485308081ade11891f22fb",
};

// init fireStore
firebase.initializeApp(firebaseConfig);

// init serveise
const projectAuth = firebase.auth();

export { projectAuth };
