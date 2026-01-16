import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import CardGrid from './CardGrid'
import Scoreboard from './Scoreboard'
import shuffleArray from '../utils/shuffleArray'

const cards = [
  {name: 'Mew', id: 0, pokemonId: 151},
  {name: 'Goomy', id: 1, pokemonId: 704},
  {name: 'Trubbish', id: 2, pokemonId: 568},
  {name: 'Rhyhorn', id: 3, pokemonId: 111},
  {name: 'Noivern', id: 4, pokemonId: 715},
  {name: 'Sylveon', id: 5, pokemonId: 700},
  {name: 'Dragonite', id: 6, pokemonId: 149},
  {name: 'Mimikyu', id: 7, pokemonId: 778},
  {name: 'Cyndaquil', id: 8, pokemonId: 155},
  {name: 'Smoliv', id: 9, pokemonId: 928},
  {name: 'Greavard', id: 10, pokemonId: 971},
  {name: 'Sprigatito', id: 11, pokemonId: 906},
  {name: 'Scolipede', id: 12, pokemonId: 545},
  {name: 'Wooper', id: 13, pokemonId: 194},
  {name: 'Chimchar', id: 14, pokemonId: 390},
  {name: 'Jigglypuff', id: 15, pokemonId: 39},
]

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArray, setCardsArray] = useState(shuffleArray(cards));
  const [selectedArray, setSelectedArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);


  function handleClick(clickedItem) {
    const newArray = [...cardsArray];
    shuffleArray(newArray);
    setCardsArray(newArray);
    
    if (selectedArray.length === 0) {
      setIsGameOver(false);
      setSelectedArray([clickedItem]);
      setScore(1);
      if (highScore === 0) {
        setHighScore(1);
      }
    } else if (selectedArray.includes(clickedItem)) {
      setCardsArray(cards);
      setSelectedArray([]);
      setScore(0);
      setIsGameOver(true);
    } else {
      setSelectedArray([...selectedArray, clickedItem]);
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    }
  }

  return (
    <>
      <Header />
      <CardGrid cards={cardsArray}
                handleClick={handleClick} />
      <Scoreboard score={score}
                  highScore={highScore}
                  gameOver={isGameOver} />
    </>
  )
}

export default App
