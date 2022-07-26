// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRYpgImR9BZYRN2kI4vqatR5GjNfindaI",
  authDomain: "disney-32677.firebaseapp.com",
  projectId: "disney-32677",
  storageBucket: "disney-32677.appspot.com",
  messagingSenderId: "740677536537",
  appId: "1:740677536537:web:a36b7cbbd1802c224a9388",
  measurementId: "G-P0R9R3K3ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);