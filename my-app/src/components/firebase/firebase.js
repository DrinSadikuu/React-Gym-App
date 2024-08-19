// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKgCrg6b61tysYwR9_vaB30drjXykIiM",
  authDomain: "gymauth-500db.firebaseapp.com",
  projectId: "gymauth-500db",
  storageBucket: "gymauth-500db.appspot.com",
  messagingSenderId: "479764526969",
  appId: "1:479764526969:web:13149732f6b3889a0da1a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}