import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, username, email } = this.props.monsters;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2$size=180x180`}
          alt={name}
        />
        <h2>{name}</h2>
        <h3> username: {username}</h3>
        <p> email: {email}</p>
      </div>
    );
  }
}

export default Card;
