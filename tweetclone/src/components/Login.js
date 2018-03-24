import React, { Component } from "react";
import "./Login.css";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

class Login extends Component {
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  authHandler = () => {
    this.props.history.push(`/app`);
  };

  render() {
    return (
      <div className="login">
        <div className="login__cell">
          <div className="login__cell-content">
            <div className="login__communicationItem">
              Follow your interests.
            </div>
            <div className="login__communicationItem">
              Hear what people are talking about.
            </div>
            <div className="login__communicationItem">
              Join the conversation.
            </div>
          </div>
        </div>
        <div className="login__cell">
          <div className="login__cell-content">
            <h2>See what’s happening in the world right now</h2>
            <h3>Join Twitter today.</h3>
            <button onClick={() => this.authenticate("Github")}>
              Log in with Github
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
