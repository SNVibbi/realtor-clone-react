// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC097vE_sUf5Wyul_xyIOTdPw7_sn0VyhA",
  authDomain: "realtor-clone-react-1c2dc.firebaseapp.com",
  projectId: "realtor-clone-react-1c2dc",
  storageBucket: "realtor-clone-react-1c2dc.appspot.com",
  messagingSenderId: "46774305381",
  appId: "1:46774305381:web:bd4baa0fd2fa1d26d33c8c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()