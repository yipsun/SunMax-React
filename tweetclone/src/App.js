import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data.json';


class App extends Component {
    render() {

        const cards = data.tweet.map((card) => {
            return <Card key="card.id_str" data="card" />
        })

        return (
            <div className="App">
                {cards}
            </div>
        );
    }
}

export default App;
