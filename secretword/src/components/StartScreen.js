import './StartScreen.css'

const StarTScreen = ({startGame}) => {
    return(
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={startGame}>Clique para começar</button>
    </div>
)

}

export default StarTScreen