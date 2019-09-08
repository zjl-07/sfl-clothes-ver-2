import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBFTf7pgRonN7ZsgvU-XODaMk59vIL9qQw",
  authDomain: "clothes-ecommerce-db-6f44b.firebaseapp.com",
  databaseURL: "https://clothes-ecommerce-db-6f44b.firebaseio.com",
  projectId: "clothes-ecommerce-db-6f44b",
  storageBucket: "",
  messagingSenderId: "24924931307",
  appId: "1:24924931307:web:702192cc08eadc65dfeaae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
