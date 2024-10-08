// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore } from "firebase/firestore"; // Fix here, 'FireStore' should be 'Firestore'

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDBKQqzl_0RJtgeK2iue9y0r61flgc_Cww",
//   authDomain: "week7-dhivya.firebaseapp.com",
//   projectId: "week7-dhivya",
//   storageBucket: "week7-dhivya.appspot.com",
//   messagingSenderId: "214858914442",
//   appId: "1:214858914442:web:c68436fb354fc633346b73"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const db = getFirestore()
// export default db

// init.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsHXAB8PWKGP3IgxAkZXKe9-0RqiapJSU",
  authDomain: "mindlume.firebaseapp.com",
  projectId: "mindlume",
  storageBucket: "mindlume.appspot.com",
  messagingSenderId: "565684820855",
  appId: "1:565684820855:web:fcc8eb1c1b6a05d2069f72"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services with the correct app instance
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
