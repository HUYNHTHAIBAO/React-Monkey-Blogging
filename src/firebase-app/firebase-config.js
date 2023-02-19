import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPasswordm,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxSOUWprkIbdRge9iotV8KFm1Q4Nsx5jU",
  authDomain: "monkey-blogging-12430.firebaseapp.com",
  projectId: "monkey-blogging-12430",
  storageBucket: "monkey-blogging-12430.appspot.com",
  messagingSenderId: "76433166575",
  appId: "1:76433166575:web:a74e55f2e936adc7698b1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Đăng kí
export const auth = getAuth(app);
