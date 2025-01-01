// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEsO2I2IIiVDomQOg4AsWW1UJ22VYTD6w",
  authDomain: "react-course-ac985.firebaseapp.com",
  projectId: "react-course-ac985",
  storageBucket: "react-course-ac985.firebasestorage.app",
  messagingSenderId: "283000378189",
  appId: "1:283000378189:web:44aefdc7eb5a54cd999d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);