import React, { useEffect } from "react";
import { signInWithGoogle, auth, createUserProfileDocument } from "./firebase";

export default function App() {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const userRef = createUserProfileDocument(user);
        userRef.get().then(user => console.log(user.data()));
        // userRef.onSnapshot(snapshot => {
        //   console.log(snapshot.data());
        // });
      }
    });
  }, []);

  return (
    <div>
      <button onClick={signInWithGoogle}>Google</button>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}
