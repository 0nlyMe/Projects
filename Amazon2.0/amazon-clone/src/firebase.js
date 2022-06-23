import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpYa-ADvFpA4hIg3ArzGvvGlSB0vO_2C0",
  authDomain: "challenge-ba906.firebaseapp.com",
  projectId: "challenge-ba906",
  storageBucket: "challenge-ba906.appspot.com",
  messagingSenderId: "198637966903",
  appId: "1:198637966903:web:02b17e4701861064c5d1b2",
  measurementId: "G-XKWRLP7NM9",
};

const firebasApp = firebase.initializeApp(firebaseConfig);

const db = firebasApp.firestore();
const auth = firebase.auth();

export { db, auth };
