// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcbWIPPSWOtTluR2SZjNOkxf3AGw-DoAk",
    authDomain: "linkedln-27e53.firebaseapp.com",
    projectId: "linkedln-27e53",
    storageBucket: "linkedln-27e53.appspot.com",
    messagingSenderId: "968887110690",
    appId: "1:968887110690:web:38040527b5e1c86b6ace7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default getFirestore()