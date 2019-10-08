import React, { Component } from "react";
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

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");
provider.setCustomParameters({
  prompt: "select_account"
});
const signInGoogle = () => firebase.auth().signInWithRedirect(provider);

export default class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userRef = firebase.firestore().doc(`users/${user.uid}`);
        userRef.get().then(snapshot => {
          if (!snapshot.exists) {
            userRef.set({
              name: user.displayName,
              email: user.email,
              createdAt: new Date()
            });
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={signInGoogle}>google</button>
      </div>
    );
  }
}
