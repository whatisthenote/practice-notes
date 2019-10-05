import React, { Component } from "react";
import { auth, createUserProfileDocument } from "./Firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      displayName: "fdsfdsdfs",
      email: "fdsf@fadasdaafs.com",
      password: "122343224"
    };
  }

  submit = async () => {
    const { displayName, email, password } = this.state;

    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    createUserProfileDocument(user, { displayName });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <button onClick={this.submit}>submit</button>
        <button onClick={() => auth.signOut()}>sign out</button>
      </div>
    );
  }
}
