// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyBPKeQwV_Wyyzm6PHYYGEqwJ6p8hVTDcDA",
  authDomain: "react-crownfit.firebaseapp.com",
  projectId: "react-crownfit",
  storageBucket: "react-crownfit.appspot.com",
  messagingSenderId: "257661446655",
  appId: "1:257661446655:web:ef80d46336756805c99fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
