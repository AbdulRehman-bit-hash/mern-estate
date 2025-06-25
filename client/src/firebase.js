// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4db9d.firebaseapp.com",
  projectId: "mern-estate-4db9d",
  storageBucket: "mern-estate-4db9d.firebasestorage.app",
  messagingSenderId: "451055801132",
  appId: "1:451055801132:web:923c35ce239ec91d44d289"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);


