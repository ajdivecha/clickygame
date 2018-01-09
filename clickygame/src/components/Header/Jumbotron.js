import React from "react";
import "./Jumbotron.css";
import Score from "./Score.js";
import HighScore from "./HighScore.js";

const Jumbotron = props => (
<div className="jumbotron">
  <div className="container">
    <h1 className="title">The Women of Disney: Day of the Dead Edition</h1>
    <h3 className="rules">Click below and try not to choose the same lady twice.</h3>

    <h2>Score <Score className='score' score={props.score}/></h2>
    <h2>High Score <HighScore className='highScore' highScore={props.highScore}/></h2>

  </div>
</div>
)

export default Jumbotron;
