import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCrr-6HvnGLJf81m7DQL0semyeqvxNtbBU",
  authDomain: "react-ecommerce-218a5.firebaseapp.com",
  projectId: "react-ecommerce-218a5",
  storageBucket: "react-ecommerce-218a5.appspot.com",
  messagingSenderId: "139313556581",
  appId: "1:139313556581:web:74dc3becf4d07b633dea8c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)