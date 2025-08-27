// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJjAKpPitclofHTco0KbHa0wy-6OscsU0",
  authDomain: "locationtracker-5a2af.firebaseapp.com",
  projectId: "locationtracker-5a2af",
  storageBucket: "locationtracker-5a2af.firebasestorage.app",
  messagingSenderId: "571475505762",
  appId: "1:571475505762:web:42002608e0fd00f846973b",
  measurementId: "G-RTC302SGY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics only in browser environments
let analytics;
try {
  analytics = getAnalytics(app);
} catch (_) {
  // no-op when analytics isn't available (e.g., in non-browser contexts)
}

// Initialize and export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;