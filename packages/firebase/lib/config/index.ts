// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHEMOjy43f-h8TzkqWRgbG8Nmo7Q_Ur-c",
    authDomain: "flash-cards-5014c.firebaseapp.com",
    projectId: "flash-cards-5014c",
    storageBucket: "flash-cards-5014c.appspot.com",
    messagingSenderId: "817123007482",
    appId: "1:817123007482:web:516aeab6801348130ce243",
    measurementId: "G-7D64P76MJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };