// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9RTaDXvGLJbxQ5BufEUCHFydz6hRjw2o",
  authDomain: "devstore-de737.firebaseapp.com",
  projectId: "devstore-de737",
  storageBucket: "devstore-de737.appspot.com",
  messagingSenderId: "378854138151",
  appId: "1:378854138151:web:35516047992bd9cf9f0902",
  measurementId: "G-3L0S0NBRMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);