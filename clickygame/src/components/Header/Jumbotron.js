import React from "react";
import "./Jumbotron.css";
import Score from "./Score.js";
import HighScore from "./HighScore.js";

const Jumbotron = props => (
<div className="jumbotron">
  <div className="container">
    <h2 className="title">The Women of Disney: Day of the Dead Edition</h2>
    <h3 className="rules">Click below and try not to choose the same lady twice.</h3>

    <span className="score">Score: <Score className='score' score={props.score}/></span><span className="score">High Score: <HighScore className='highScore' highScore={props.highScore}/></span>

  </div>
</div>
)

export default Jumbotron;
