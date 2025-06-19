//css
import './App.css';

//data
import {wordsList} from"./data/words"

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

const[guessesdLetters, setGuessedLetters]= useState([])
const[wrongLetters, setWrongLetters]= useState([])
const[guesses, setGuesses]= useState(5)
const[score, setScore]= useState(0)

const pickedWordAndCategory = () =>{
//Pick a random category
  const categories = Object.keys(words)

  const category = categories[Math.floor(Math.random()*Object.keys(categories).length)]
 console.log(category)

 //Pick a random word
 const word = words[category][Math.floor(Math.random()* words[category].length)]

 console.log(word)

 return {word, category}

}


//Starts the secret word game
const startGame = ()=>{
  
  //Picked words and picked categories
  const{word,category} = pickedWordAndCategory()
  
  //create an array of letters
  let wordLetters = word.split("")

  wordLetters = wordLetters.map((l)=> l.toLowerCase())


  console.log(wordLetters)

  
  //Fill states
  setPickedWord(word)
  setLetters(wordLetters)
  setPickedCategory(category)




  setGameStage(stages[1].name)
}


//proccess the letter input
 const verifyLetter = (letter) =>{
console.log(letter)
}

 //Restart the game
 const retry = ()=>{

  setGameStage(stages[0].name)
 }



  return (
    <div className='App'>
      {gameStage === "start" && <StarTScreen startGame={startGame}/> }

      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter} 
      pickedCategory={pickedCategory}
      pickedWord={pickedWord}
      letters={letters}
      guesses={guesses}
      wrongLetters={wrongLetters}
      guessesdLetters={guessesdLetters}
      score={score}
      />}

      {gameStage === "end" && <End retry={retry}/>}
      
    </div>
  );
}

export default App;
