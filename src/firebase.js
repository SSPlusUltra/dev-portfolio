
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBLOam06jjgN_7ytxjGZE0hERVrUm17TMo",

  authDomain: "dev-portfolio-b9924.firebaseapp.com",

  projectId: "dev-portfolio-b9924",

  storageBucket: "dev-portfolio-b9924.appspot.com",

  messagingSenderId: "928945950165",

  appId: "1:928945950165:web:dbde20642b4f944947815c",


};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);