import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { signInWithGoogle } from "./firebase";
import "firebase/auth";

export default function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        const userRef = firebase.firestore().doc(`users/${user.uid}`);
        userRef.get().then(doc => {
          if (!doc.exists) {
            userRef.set({
              name: user.displayName,
              email: user.email,
              date: new Date()
            });
          }
        });
      }
    });
  }, []);

  return (
    <div>
      {console.log(user)}
      <button onClick={signInWithGoogle}>google</button>
      <button onClick={() => firebase.auth().signOut()}>sign out</button>
    </div>
  );
}
