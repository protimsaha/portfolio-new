// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPKjr0wG_CStYiFrFddYkZ8i7BBgX8OZ8",
    authDomain: "portfolio-dd3ae.firebaseapp.com",
    projectId: "portfolio-dd3ae",
    storageBucket: "portfolio-dd3ae.appspot.com",
    messagingSenderId: "37613195163",
    appId: "1:37613195163:web:3b10eab131a2c45b245b3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;