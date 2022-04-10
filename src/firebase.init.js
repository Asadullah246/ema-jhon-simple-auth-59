// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWxbhy1Q4vmdyEU2watqXdhmS2wm7rKSA",
  authDomain: "ema-jhon-simple-3e199.firebaseapp.com",
  projectId: "ema-jhon-simple-3e199",
  storageBucket: "ema-jhon-simple-3e199.appspot.com",
  messagingSenderId: "659843367880",
  appId: "1:659843367880:web:ce93b9b94c9207766d76fd",
  measurementId: "G-1DQRJ5RXVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth, analytics};