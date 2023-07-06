
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
   apiKey: "AIzaSyD3_arcgkrCHw-zFb17Dv88l93hbT6mjtA",

  authDomain: "react-portfolio-website-f9cd9.firebaseapp.com",

  projectId: "react-portfolio-website-f9cd9",

  storageBucket: "react-portfolio-website-f9cd9.appspot.com",

  messagingSenderId: "338158468747",

  appId: "1:338158468747:web:2af21c8648951a04681e8e",

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);