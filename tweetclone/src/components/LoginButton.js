import React from "react";
import firebase from "firebase";
import { withRouter } from "react-router-dom";

const LoginButton = props => {
  const { provider, history } = props;

  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler);
  };

  const authHandler = () => {
    localStorage.setItem("logged", "true");
    history.push(`/`);
  };

  return (
    <button onClick={() => authenticate(provider)}>
      Log in with {provider}
    </button>
  );
};

export default withRouter(LoginButton);
