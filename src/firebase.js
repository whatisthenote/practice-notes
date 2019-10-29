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

export const addCollection = (collectionKey, document) => {
  const collectionRef = firebase.firestore().collection(collectionKey);
  const batch = firebase.firestore().batch();
  document.forEach(obj => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });
  batch.commit();
};
