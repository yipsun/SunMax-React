import React, { Component } from 'react';
import firebase from "firebase";
import './App.css';
import data from './data.json';

import Card from './Card';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { };


        // define connexion to firebase project
        var config = {
            apiKey: "AIzaSyDxqfw0tZOlQ6ITm_w-ZfRN5DybnQa6nYI",
            authDomain: "tweetclone-1b35e.firebaseapp.com",
            databaseURL: "https://tweetclone-1b35e.firebaseio.com",
            projectId: "tweetclone-1b35e",
            storageBucket: "tweetclone-1b35e.appspot.com",
            messagingSenderId: "1002525357163"
        };
        
        firebase.initializeApp(config);
        

        // fetching firebase db
        this.db = firebase.database();
        
        // fetching root reference to db
        this.dbRef = this.db.ref();

        
    }

    componentWillMount() {
        // db.ref("tweet") == db.ref().child("tweet")
        this.dbRef.child("tweet").on('value', (snapshot) => {
            this.setState( {tweet : snapshot.val()});
        });

    }


    render() {
        console.log(this.state);
        const cards = this.state.tweet.map((tweet) => {
            return <Card key={tweet.id_str} data={tweet} />
        })

        return (
            <div className="App">
                {cards}
            </div>
        );
    }
}

export default App;
