// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import env from "react-dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: "personal-ws-3f4ee.firebaseapp.com",
    projectId: "personal-ws-3f4ee",
    storageBucket: "personal-ws-3f4ee.appspot.com",
    messagingSenderId: "727058347009",
    appId: "1:727058347009:web:0409ce0658dd1209a4bc00",
    measurementId: "G-HD076RBL9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
