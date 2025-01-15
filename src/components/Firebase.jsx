// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhgdHI_VHPSUgQC3yxL44hCQ5GAh-XAZg",
  authDomain: "authentication-3c65a.firebaseapp.com",
  projectId: "authentication-3c65a",
  storageBucket: "authentication-3c65a.firebasestorage.app",
  messagingSenderId: "151481183370",
  appId: "1:151481183370:web:37e1712bbe0874690dd173"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export const db=getFirestore(app);

 export {app,auth}