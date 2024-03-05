// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a3f91.firebaseapp.com",
  projectId: "mern-blog-a3f91",
  storageBucket: "mern-blog-a3f91.appspot.com",
  messagingSenderId: "276519312018",
  appId: "1:276519312018:web:3695a028ea852a9bbea44b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
