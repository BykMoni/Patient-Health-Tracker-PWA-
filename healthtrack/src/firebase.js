// src/firebase.js

// Import core Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCljul9ehN2MKvwQAG-JkWK_WVT8VuPQ0",
  authDomain: "health-tracker-99f65.firebaseapp.com",
  projectId: "health-tracker-99f65",
  storageBucket: "health-tracker-99f65.firebasestorage.app",
  messagingSenderId: "551201413398",
  appId: "1:551201413398:web:40049fa7dffebe35595837",
  measurementId: "G-5B7S9DF4PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export initialized services
export { app, auth, db, analytics };
