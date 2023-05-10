// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8mTXFT1ElucNF1PUSLZR0jLKOiV8OG4",
  authDomain: "react-cyber.firebaseapp.com",
  projectId: "react-cyber",
  storageBucket: "react-cyber.appspot.com",
  messagingSenderId: "537792763120",
  appId: "1:537792763120:web:5aba45ea7231d5085ade35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
