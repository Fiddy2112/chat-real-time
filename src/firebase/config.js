// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb7aLIXElhlxK-ByTdj9QplcL6tEpOyA4",
  authDomain: "chat-real-time-7b6d1.firebaseapp.com",
  projectId: "chat-real-time-7b6d1",
  storageBucket: "chat-real-time-7b6d1.appspot.com",
  messagingSenderId: "903857233237",
  appId: "1:903857233237:web:8842d895d3366bd4fb23dc",
  measurementId: "G-WVP0EQGE4X",
  firebase_token: process.env.FIREBASE_TOKEN,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8800);
}

export { auth, db };
