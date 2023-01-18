
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_BdbHlH2HESphACH5BRLC1qEuzAEiDxA",
  authDomain: "web-portfolio-apps.firebaseapp.com",
  projectId: "web-portfolio-apps",
  storageBucket: "web-portfolio-apps.appspot.com",
  messagingSenderId: "833457427460",
  appId: "1:833457427460:web:05279a353a31a0ead91151",
  measurementId: "G-V4M671LBB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
