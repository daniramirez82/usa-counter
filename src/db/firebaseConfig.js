// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7liqJNOhJB062r6BjusyE3IBGKpzpZLk",
  authDomain: "usa-counter.firebaseapp.com",
  projectId: "usa-counter",
  storageBucket: "usa-counter.appspot.com",
  messagingSenderId: "840933596223",
  appId: "1:840933596223:web:1b1b3a7e42e4e686c22c8a",
  measurementId: "G-QSWQKBR2SD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
