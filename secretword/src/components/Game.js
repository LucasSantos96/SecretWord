
import "./Game.css"


const Game = ({ 
      verifyLetter, 
      pickedCategory,
      pickedWord,
      letters,
      guesses,
      wrongLetters,
      guessesdLetters,
      score
    }) => {
  return (
    <div className="game">
      <p className='ponints'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className='wordContainer'>
        {letters.map((letter,i)=> guessesdLetters.includes(letter) ? (

          <span key={i} className='letter'>{letter}</span>

        ):(
          <span key={i} className='blankSquare'></span>
        ))}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhas uma letra da palavra:</p>

        <form>
          <input name='letter' type="text" required maxLength={1}/>
          <button>Jogar!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>

          {wrongLetters.map((letter, i )=>(
            <span key={i}> {letter}, </span>
          ) )}

      </div>
    </div>
  )
}
export default Game