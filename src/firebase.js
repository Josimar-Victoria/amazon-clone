import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVZPUSMKLZcIa4_ZmG88iTrZHBntbFWqs",
  authDomain: "clone-a6aa5.firebaseapp.com",
  projectId: "clone-a6aa5",
  storageBucket: "clone-a6aa5.appspot.com",
  messagingSenderId: "1097702067538",
  appId: "1:1097702067538:web:f46e8f56fb7d65605ffe8b",
  measurementId: "G-JLEW479LSL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
