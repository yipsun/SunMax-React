import React, { Component } from "react";
//import moment from "moment";

class Card extends Component {
  render() {
    const { img_url, name, screen_name } = this.props.data.user;
    const { text } = this.props.data;
    // const date = moment(this.props.data.created_at).format("DD-MMMM-YYYY");

    return (
      <div className="card">
        <img src={img_url} alt="user profile pic" />
        <div className="card__name">
          {name}
          - <span className="card__screenName">@{screen_name}</span>
          {/* . <span className="card__date">{date}</span> */}
        </div>
        <p className="card__text">{text}</p>
      </div>
    );
  }
}

export default Card;
