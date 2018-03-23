import React, { Component } from "react";
import "./App.css";
import base from "../base";
import Card from "./Card";

class App extends Component {
  state = {
    tweet: []
  };

  componentWillMount() {
    this.ref = base.syncState(`tweet`, {
      context: this,
      state: "tweet"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="cards">
          {this.state.tweet.map(tweet => (
            <Card key={tweet.id_str} data={tweet} />
          ))};
        </div>
      </div>
    );
  }
}

export default App;
