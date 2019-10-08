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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "fdfdsfds",
      email: "fdsfdklj@fdfdddd.com",
      password: "12341234"
    };
  }

  submit = () => {
    const { email, password, displayName } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(console.log("account already exists"));
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userRef = firebase.firestore().doc(`users/${user.uid}`);
        userRef.get().then(snapshot => {
          if (!snapshot.exists) {
            userRef.set({
              email,
              displayName,
              createdAt: new Date()
            });
          }
        });
      }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.submit}>submit</button>
        <button onClick={() => firebase.auth().signOut()}>sign out</button>
      </div>
    );
  }
}
