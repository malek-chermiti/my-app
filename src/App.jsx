import { useState, useEffect } from 'react';
import Score from './components/Score';
import Cards from './components/Cards';
import './App.css';

const API_KEY = "RfRO9LPHJ1KOncNLVhbQK6jFO7Wph28i";
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=amphibia&limit=12`;

function App() {
  const [gifs, setGifs] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setGifs(data.data));
  }, []);

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      // déjà cliqué → game over
      setScore(0);
      setClickedIds([]);
    } else {
      // nouveau clic → score + 1
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds([...clickedIds, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      // mélanger les cartes
      setGifs([...gifs].sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div>
      <Score score={score} bestScore={bestScore} />
      <Cards gifs={gifs} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;