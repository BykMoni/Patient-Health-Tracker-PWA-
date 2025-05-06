// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCljul9ehN2MKvwQAG-JkWK_WVT8VuPQ0",
  authDomain: "health-tracker-99f65.firebaseapp.com",
  projectId: "health-tracker-99f65",
  storageBucket: "health-tracker-99f65.appspot.com",
  messagingSenderId: "551201413398",
  appId: "1:551201413398:web:40049fa7dffebe35595837",
  measurementId: "G-5B7S9DF4PH"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Export auth service
export const auth = getAuth(app);
