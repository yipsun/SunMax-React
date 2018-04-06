import React, { Component } from "react";
import "./Home.css";
import LoginButton from "./LoginButton";

class Home extends Component {
  componentWillMount() {
    if (localStorage.logged) {
      this.props.history.push(`/`);
    }
  }

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
            <LoginButton provider="Github" history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
