import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="card">
                <img src="https://placeimg.com/40/40/any" />
                <div className="card__name">
                    - <span className="card__screenName"></span>
                    . <span className="card__date"></span>
                </div>
                <p className="card__text"></p>
            </div>
        );
    }
}

export default Card;