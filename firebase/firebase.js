// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import useFirebaseAuth from "./auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   apiKey: "AIzaSyCYVWugfLeWWjzFcfbkLW60TYWGvNwpVcs",
  //   authDomain: "think-b.firebaseapp.com",
  //   projectId: "think-b",
  //   storageBucket: "think-b.appspot.com",
  //   messagingSenderId: "914594842517",
  //   appId: "1:914594842517:web:d05e65c1ee8f602c19989c",
  //   measurementId: "G-83R3YE21C8",
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
  measurementId: process.env.firebase_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);
