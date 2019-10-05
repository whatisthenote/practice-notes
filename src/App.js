import React, { Component } from "react";
import { auth, signInWithGoogle, createUserProfileDocument } from "./Firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        createUserProfileDocument(user);
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={signInWithGoogle}>google</button>
        <button onClick={() => auth.signOut()}>sign out</button>
      </div>
    );
  }
}
