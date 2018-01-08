import React from "react";
import "./Jumbotron.css";
import Score from "./Score.js";

const Jumbotron = props => (
<div className="jumbotron">
  <div className="container">
    <h2 className="title">The Women of Disney: Day of the Dead Edition</h2>
    <h4 className="rules">Want to play a game? Like chasing high scores?</h4>
    <h4 className="rules">Play below and try not to click the the same sugar skull twice.</h4>
    <Score
    score={props.score}/>
  </div>
</div>
)

export default Jumbotron;
