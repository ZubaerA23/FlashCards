// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA16ISW4SueHDJsWDt5dDY7B_c32jgMuo4",
  authDomain: "flashcardsaas-a14bb.firebaseapp.com",
  projectId: "flashcardsaas-a14bb",
  storageBucket: "flashcardsaas-a14bb.appspot.com",
  messagingSenderId: "695400257182",
  appId: "1:695400257182:web:cded7d3c04641d3aba0d8f",
  measurementId: "G-6R3T0MSHDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);