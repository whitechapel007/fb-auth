// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA25sN9LiyIMjcUTD2GyAvLr__Noj7lsRU",
  authDomain: "react-auth-aeafa.firebaseapp.com",
  projectId: "react-auth-aeafa",
  storageBucket: "react-auth-aeafa.appspot.com",
  messagingSenderId: "543488009690",
  appId: "1:543488009690:web:9254551f84972b25fccce3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
