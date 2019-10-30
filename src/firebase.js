import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUj8zVHoOV69zIki45GCfOXiSHUOO3Nf4",
  authDomain: "test-d9fad.firebaseapp.com",
  databaseURL: "https://test-d9fad.firebaseio.com",
  projectId: "test-d9fad",
  storageBucket: "test-d9fad.appspot.com",
  messagingSenderId: "570976355046",
  appId: "1:570976355046:web:c0d06dcf67e30712b0f127",
  measurementId: "G-HESQHEYC57"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = user => {
  const userRef = firestore.doc(`users/${user.uid}`);
  userRef.get().then(doc => {
    if (!doc.exists) {
      userRef.set({
        displayName: user.displayName,
        email: user.email,
        date: new Date()
      });
    }
  });
  return userRef;
};
