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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    try {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error in creating user doc", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
