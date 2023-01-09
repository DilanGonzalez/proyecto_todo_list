// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj60h810JCrJmYaZJL24WH4wBNktveSUw",
  authDomain: "level-up-3cda7.firebaseapp.com",
  projectId: "level-up-3cda7",
  storageBucket: "level-up-3cda7.appspot.com",
  messagingSenderId: "394436084587",
  appId: "1:394436084587:web:35573353309c2e7b55822e",
  measurementId: "G-EB7JZX1XE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);

