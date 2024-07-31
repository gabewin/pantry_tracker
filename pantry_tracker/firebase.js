// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmjSxMXzRgoTOpcWVkqNjyv-uQ_wW8U5k",
  authDomain: "hspantry-a1fa6.firebaseapp.com",
  projectId: "hspantry-a1fa6",
  storageBucket: "hspantry-a1fa6.appspot.com",
  messagingSenderId: "707901383961",
  appId: "1:707901383961:web:223706e809297efec1d188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}