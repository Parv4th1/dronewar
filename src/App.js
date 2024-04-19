import './App.css';
import { useState } from 'react';
import Welcome from './Welcome.js';
import Header from './Header.js';
import Footer from './Footer.js';
import GameScreen from './Game/GameScreen.js';
function App() {

  const [gameState, setGameState] = useState('welcome');
  const startGame = () => {
     setGameState('play');
  };
  return (
    <div className="App">
      <Header/>
      {gameState==='play'?<GameScreen/>:<Welcome startGame={startGame}/>}
      <Footer gameState={gameState}/>
    </div>
  );
}

export default App;
