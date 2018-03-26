import React, { Component } from "react";
// import base from "../base";

export default class TweetBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // tweet: [],
            currentTweet: ""
        };

        this.charLimit = 140;
    }
    

    componentWillMount() {
        // this.ref = base.syncState(`tweet`, {
        //     context: this,
        //     state: "tweet"
        // });


    }
    
    componentDidMount() {
        // bind native event to input to enable preventDefault function
        this.input.addEventListener("keypress", this.keyboardHandle, false);
    }

    keyboardHandle = (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();


            if(this.state.currentTweet.trim().length > 0){
                const entry = {
                    "created_at" : `${Date.now()}` ,
                    "id_str": `${parseInt(Math.random() * Math.pow(10, 18), 10)}`,
                    "text": this.state.currentTweet
                }

                this.props.addTweet(entry);
            }
            
        }

        // on key Enter
        // if(event.keyCode == 13) {
        //     console.log(2);
        //     const tweet = [...this.state.tweet];

        //     tweet.push({
        //         "created_at" : `${Date.now()}` ,
        //         "id_str": `${parseInt(Math.random() * Math.pow(10, 18))}`,
        //         "text": event.target.value,
        //         "user" : {
        //             "description" : "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://twittercommunity.com/ ⌨️ #TapIntoTwitter",
        //             "id" : 2244994945,
        //             "img_url" : "http://placeimg.com/60/60/people",
        //             "location" : "Internet",
        //             "name" : "Twitter Dev",
        //             "screen_name" : "TwitterDev",
        //             "url" : "https://dev.twitter.com/"
        //         }
        //     });

        //     console.log(tweet);

        //     this.setState({tweet});
        // }
    }

    contentChange = (event) => {

        // event.target.value = event.target.value.substring(0, this.charLimit);
        if(event.target.value.length <= this.charLimit){
            this.setState({currentTweet : event.target.value});
        }
        // else {
        //     this.setState({currentTweet : event.target.value.substring(0, this.charLimit)});            
        // }
    }

    buttonSubmit = () => {
        // console.log(this.input.value, this.input);
    }

    render() {
        return (
            <div>
                <span> {this.state.currentTweet.length} / {this.charLimit}</span>
                <textarea
                    ref={ (input) =>  this.input = input} 
                    onChange={ this.contentChange }
                    placeholder="Start Tweeting!"
                    value={this.state.currentTweet} />
                <button onClick={this.buttonSubmit} type="button" disabled={!this.state.currentTweet}>Tweet</button>         
            </div>
        );
    }
}