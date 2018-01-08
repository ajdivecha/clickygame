import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} picked={props.selected} onClick={() => props.cardPicked(props.id)}/>
    </div>
  </div>
);

export default CharacterCard;
