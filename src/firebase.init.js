// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-P0VbeGqfXAXfWOkRSMQYiAnPn54Zm_A",
  authDomain: "simple-firebase-authenti-af7e4.firebaseapp.com",
  projectId: "simple-firebase-authenti-af7e4",
  storageBucket: "simple-firebase-authenti-af7e4.appspot.com",
  messagingSenderId: "1024106834328",
  appId: "1:1024106834328:web:ff2c095f28466cd80be3ed",
  measurementId: "G-QWKBTDSWEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
