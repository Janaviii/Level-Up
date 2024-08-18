// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANn7vcO2uXqK7QLCbITkzuPtImeaQPug0",
  authDomain: "test-7638c.firebaseapp.com",
  databaseURL: "https://test-7638c-default-rtdb.firebaseio.com",
  projectId: "test-7638c",
  storageBucket: "test-7638c.appspot.com",
  messagingSenderId: "502503303521",
  appId: "1:502503303521:web:35bfeed0e54a6357933d20",
  measurementId: "G-M004VLCLYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { auth, fireDB };
