import React from "react";
import "./Jumbotron.css";
import Score from "./Score.js";
import HighScore from "./HighScore.js";

const Jumbotron = props => (
<div className="jumbotron">
  <div className="container">
    <h2 className="title">The Women of Disney: Day of the Dead Edition</h2>
    <h3 className="rules">Click below and try not to choose the same lady twice.</h3>

    <p className="scoreBoard">
    <span className="score">Score: </span>
    <Score className='score' score={props.score}/>
    <span className="score"> High Score: </span>
    <HighScore className='score' highScore={props.highScore}/>
    </p>

    <p className="alert">{props.message}</p>

  </div>
</div>
)

export default Jumbotron;
