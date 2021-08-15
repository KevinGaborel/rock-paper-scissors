import './style.css';
import { useState, useEffect} from 'react';
import React from 'react';
import Badge from '../../components/Badge';
import ScoreHud from "../../components/ScoreHud";
import Rules from "../../components/Rules";
import Retry from "../../components/Retry";

function Home() {
  const [stepGame, setStepGame] = useState({
    score: 0,
    choice: 'none',
    step: 'choice',
    computerChoice: false,
    result: 'none'
  });
  

  const badges = ["rock", "paper", "scissors"];

  const play = (value) => {
    setStepGame({choice: value, step: 'game', computerChoice: stepGame.computerChoice, score: stepGame.score});
    setTimeout(() => setStepGame({choice: value, step: 'game', computerChoice: badges[getRandomIntInclusive()], score: stepGame.score}), 1000);
  };

  function getRandomIntInclusive() {
    return Math.floor(Math.random() * (2 - 0 +1)) + 0;
  }

  function getResult(playerChoice, computerChoice){
 
    let result;

    if (playerChoice === "rock" && computerChoice === "rock"){
      result = "EQUALITY";
    } else if (playerChoice === "rock" && computerChoice === "paper"){
      result = "YOU LOSE";
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
      result = "YOU WIN";
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
      result = "YOU LOSE";
    } else if (playerChoice === "paper" && computerChoice === "rock"){
      result = "YOU WIN";
    } else if (playerChoice === "paper" && computerChoice === "paper"){
      result = "EQUALITY";
    } else if (playerChoice === "scissors" && computerChoice === "scissors"){
      result = "EQUALITY";
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
      result = "YOU WIN";
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
      result = "YOU LOSE";
    }

    return result
  }

  useEffect(() => {
    if (stepGame.step !== 'choice' && stepGame.computerChoice !== false){
      console.log(stepGame);
      setTimeout(() => setStepGame({
        choice: stepGame.choice, 
        step: stepGame.step, 
        computerChoice: stepGame.computerChoice, 
        score: stepGame.score,
        result: getResult(stepGame.choice, stepGame.computerChoice)
      }), 1000);
    }

  }, [stepGame.computerChoice, stepGame.choice, stepGame.result]);

  useEffect(() => {
    if (stepGame.result === "YOU WIN"){
      console.log(stepGame);
      setStepGame({
        choice: stepGame.choice, 
        step: stepGame.step, 
        computerChoice: stepGame.computerChoice, 
        score: stepGame.score++,
        result: stepGame.result
      });
    }

  }, [stepGame.result, stepGame.score]);


  return (
    <React.Fragment>
      <ScoreHud score={stepGame.score} />
      <div id="main-container">
        <main id={stepGame.step} >
  
            {stepGame.choice === 'none' && stepGame.step === 'choice' 
            ? 
            badges.map((badge, index) => 
            <button key={badge + index} className={`badge-${badge} badge`} id={`place-${index}`} onClick={() => play(badge)}>
              <Badge  value={badge} />
            </button>) 
            : 
              <React.Fragment>
                <button className={`badge-${stepGame.choice} badge`} id="place-0" >
                  <Badge  value={stepGame.choice} />
                </button>
                <p id="player">YOU PICKED</p>
  
                {stepGame.computerChoice ? 
                  <React.Fragment>
                    <button className={`badge-${stepGame.computerChoice} badge`} id="place-1" >
                      <Badge  value={stepGame.computerChoice} />
                    </button>
                    <p id="computer">THE HOUSE PICKED</p>
  
                    {stepGame.result !== 'none' && 
                      <React.Fragment> 
                        <p id="result-game" >{stepGame.result}</p>
                        <Retry>
                          <button id="btn-retry" onClick={()=> setStepGame({  
                            score: stepGame.score, 
                            choice: 'none',
                            step: 'choice',
                            computerChoice: false,
                            result: 'none'
                            })} >PLAY AGAIN
                          </button>
                        </Retry>
                      </React.Fragment>
                    }
  
                  </React.Fragment>
                :
                  <React.Fragment>
                    <button className='wait-computer badge'>
                      <Badge  value={stepGame.computerChoice} />
                    </button>
                    <p id="computer">THE HOUSE PICKED</p>
                  </React.Fragment>
                }
  
                  
  
              </React.Fragment>
           }
        </main>
      </div>
      <footer>
        <Rules />
      </footer>
    </React.Fragment>
  );
}

export default Home;
