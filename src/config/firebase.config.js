// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALAQmi1t6g7w5s5EuC8OrGlPw5Ipkhuvw",
  authDomain: "bookify-library-client.firebaseapp.com",
  projectId: "bookify-library-client",
  storageBucket: "bookify-library-client.appspot.com",
  messagingSenderId: "388380336028",
  appId: "1:388380336028:web:8c182b8fbfce1c4f29f259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth