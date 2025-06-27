// Import the functions you need from the SDKs you need
// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGmBiQ6T9vJlf4v3_kkbSB_wdPvBxNhHM",
  authDomain: "todo-app-a8594.firebaseapp.com",
  projectId: "todo-app-a8594",
  storageBucket: "todo-app-a8594.firebasestorage.app",
  messagingSenderId: "816470316190",
  appId: "1:816470316190:web:1ec64754a71950f90b578f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
