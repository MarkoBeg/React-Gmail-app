import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg5qxdaHNPuk6w8r-wDu9euBsVG0eDGbA",
  authDomain: "me-f4341.firebaseapp.com",
  projectId: "me-f4341",
  storageBucket: "me-f4341.appspot.com",
  messagingSenderId: "509179924530",
  appId: "1:509179924530:web:a164f2bc1bd64b9b5cac2b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
