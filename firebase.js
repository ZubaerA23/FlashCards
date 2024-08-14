// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZTrSdeYBdamG3AIKnCa5_nQvHPJ6sYWM",
  authDomain: "flashcardsaas-cd58c.firebaseapp.com",
  projectId: "flashcardsaas-cd58c",
  storageBucket: "flashcardsaas-cd58c.appspot.com",
  messagingSenderId: "853924965824",
  appId: "1:853924965824:web:770bb670bb492a9060ac25",
  measurementId: "G-MSGQCX3XRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);