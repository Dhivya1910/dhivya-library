// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"; // Fix here, 'FireStore' should be 'Firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBKQqzl_0RJtgeK2iue9y0r61flgc_Cww",
  authDomain: "week7-dhivya.firebaseapp.com",
  projectId: "week7-dhivya",
  storageBucket: "week7-dhivya.appspot.com",
  messagingSenderId: "214858914442",
  appId: "1:214858914442:web:c68436fb354fc633346b73"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db