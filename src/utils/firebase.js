// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVNq52vNdz45yKvoo8Tep6CFs2S8DJQMs",
  authDomain: "netflix-gpt-a7581.firebaseapp.com",
  projectId: "netflix-gpt-a7581",
  storageBucket: "netflix-gpt-a7581.appspot.com",
  messagingSenderId: "153335155451",
  appId: "1:153335155451:web:67456ce9412d12986a7e5e",
  measurementId: "G-2FY8QJ1WRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

