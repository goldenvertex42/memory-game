import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import CardGrid from './CardGrid'
import Scoreboard from './Scoreboard'
import shuffleArray from '../utils/shuffleArray'
import AudioPlayer from './MusicButton'
import lavenderTheme from '../assets/lavender-town-theme-alt.mp3'

const cards = [
  {name: 'Marowak', id: 0, pokemonId: 105},
  {name: 'Gastly', id: 1, pokemonId: 92},
  {name: 'Haunter', id: 2, pokemonId: 93},
  {name: 'Gengar', id: 3, pokemonId: 94},
  {name: 'Sinistea', id: 4, pokemonId: 854},
  {name: 'Misdreavus', id: 5, pokemonId: 200},
  {name: 'Shuppet', id: 6, pokemonId: 353},
  {name: 'Mimikyu', id: 7, pokemonId: 778},
  {name: 'Duskull', id: 8, pokemonId: 355},
  {name: 'Litwick', id: 9, pokemonId: 607},
  {name: 'Greavard', id: 10, pokemonId: 971},
  {name: 'Honedge', id: 11, pokemonId: 679},
  {name: 'Phantump', id: 12, pokemonId: 708},
  {name: 'Dreepy', id: 14, pokemonId: 885},
  {name: 'Drifloon', id: 15, pokemonId: 425},
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
      <AudioPlayer src={lavenderTheme}/>
      <CardGrid cards={cardsArray}
                handleClick={handleClick} />
      <Scoreboard score={score}
                  highScore={highScore}
                  gameOver={isGameOver} />
    </>
  )
}

export default App
