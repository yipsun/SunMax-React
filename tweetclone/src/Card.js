import React, { Component } from 'react';
import moment from "moment";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {

        const date = moment(this.props.data.created_at).format("DD MMMM YYYY");

        return (
            <div className="card">
                <img src={this.props.data.user.img_url} alt="user profile pic"/>
                <div className="card__name">{this.props.data.user.name}
                    - <span className="card__screenName">@{this.props.data.user.screen_name}</span>
                    . <span className="card__date">{date}</span>
                </div>
                <p className="card__text">{this.props.data.text}</p>
            </div>
        );
    }
}

export default Card;