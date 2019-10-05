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
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            user: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.user)}
        <button onClick={signInWithGoogle}>google</button>
        <button onClick={() => auth.signOut()}>sign out</button>
      </div>
    );
  }
}
