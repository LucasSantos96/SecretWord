//css
import './App.css';

//data
import {WordList, wordsList} from"./data/words"

//components
import StarTScreen from './components/StartScreen';
import Game from './components/Game';
import End from './components/End';


//react
import { useCallback, useEffect, useState } from 'react';


//estados do jogo
const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},
]
function App() {
const [gameStage, setGameStage] = useState(stages[0].name) 

const [words] = useState(wordsList)

const [pickedWord, setPickedWord] = useState("")
const [ pickedCategory, setPickedCategory] = useState("")
const [letters, setLetters] = useState([])




//Starts the secret word game
const startGame = ()=>{
  setGameStage(stages[1].name)
}


//proccess the letter input
 const verifyLetter = () =>{
  setGameStage(stages[2].name)
 }

 //Restart the game
 const retry = ()=>{

  setGameStage(stages[0].name)
 }



  return (
    <div className='App'>
      {gameStage === "start" && <StarTScreen startGame={startGame}/> }
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <End retry={retry}/>}
      
    </div>
  );
}

export default App;
