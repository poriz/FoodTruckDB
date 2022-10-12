// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuvni6CCExDRdQRT0BWqwJLJXcOH4mTS8",
  authDomain: "comeonfoodtruck.firebaseapp.com",
  databaseURL:"https://comeonfoodtruck-default-rtdb.firebaseio.com",
  projectId: "comeonfoodtruck",
  storageBucket: "comeonfoodtruck.appspot.com",
  messagingSenderId: "5136686183",
  appId: "1:5136686183:web:c9defa589ea673a64808c2",
  measurementId: "G-4S2N4LRK4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);