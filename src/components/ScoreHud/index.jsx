import './style.css';
import logo from "../../images/logo.svg";
import React from 'react';

function ScoreHud({score}) {

  return (
    <header id="score-hud">
        <img src={logo} alt="Le logo du jeu"/>

        <div id="score-container">
            <p id="header-score">SCORE</p>
            <p id="score">{score}</p>
        </div>
    </header>
  );
}

export default ScoreHud;
