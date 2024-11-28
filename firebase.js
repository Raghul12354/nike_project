// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVF6jlX5_bx-y1P92a4zEQKxd3xDcGaxw",
  authDomain: "nike-project-f43e8.firebaseapp.com",
  projectId: "nike-project-f43e8",
  storageBucket: "nike-project-f43e8.firebasestorage.app",
  messagingSenderId: "602485909117",
  appId: "1:602485909117:web:5372579f5d30bc44ccb314",
  measurementId: "G-QPQGCW2FLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);