import React, { Component } from "react";
import "./App.css";
import base from "../base";
import Card from "./Card";
import TweetBox from "./TweetBox";

class App extends Component {
  state = {
    tweet: [],
    user: {
      description:
        "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://twittercommunity.com/ ⌨️ #TapIntoTwitter",
      id: 2244994945,
      img_url: "http://placeimg.com/60/60/people",
      location: "Internet",
      name: "Twitter Dev",
      screen_name: "TwitterDev",
      url: "https://dev.twitter.com/"
    }
  };

  componentWillMount() {
    this.ref = base.syncState(`tweet`, {
      context: this,
      state: "tweet"
    });

    this.addTweet = this.addTweet.bind(this);
  }

  addTweet(entry) {
    entry.user = this.state.user;
    console.log(entry);

    const tweet = [...this.state.tweet];
    tweet.push(entry);

    this.setState({ tweet });
  }

  render() {
    return (
      <div className="App">
        <TweetBox addTweet={this.addTweet} />
        <div className="cards">
          {this.state.tweet.map(tweet => (
            <Card key={tweet.id_str} data={tweet} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
