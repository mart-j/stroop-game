import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Game from './components/gameBody/Game';
import { COLORS } from './components/colors/COLORS';
import styles from './App.module.scss';
import 'react-toastify/scss/main.scss';
import Button from './components/button/Button';


toast.configure();

const App = () => {
  const [colorToDisplay, setColorToDisplay] = useState<string>('');
  const [textToDisplay, setTextToDisplay] = useState<string>('');
  const [tick, setTick] = useState(false);
  const [key, setKey] = useState<string>('');
  const [count, setCount] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameLength, setGameLength] = useState(11);
  const randomColorNumber = Math.floor(Math.random() * COLORS.length);
  const randomTextNumber = Math.floor(Math.random() * COLORS.length);

  // listens and records keypress
  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      setKey(e.key);
    });
  }, []);



  // listens for tick (ticking every 2 seconds)
  useEffect(() => {
    gameProgress();
  }, [tick, isGameActive]);

  const startGame = () => {
    setIsGameActive(!isGameActive);
  };

  const resetGame = () => {
    setTick(!tick);
    setGameLength(11);
    setCount(0);
    setIsGameActive(true);
    setTextToDisplay('');
  };

  const countPoints = () => {
    const colorFirstChar = colorToDisplay![0];
    if (key === colorFirstChar) {
      setCount(count + 1);
    } else if (key !== colorFirstChar && gameLength !== 11) {
      toast.error('Krāsa nav pareiza!', {
        position: toast.POSITION.TOP_CENTER,
        delay: 100,
        autoClose: 1000,
      });
    }
  };

  const endGame = () => {
    setTick(!tick);
    setGameLength(11);
    setCount(0);
    setIsGameActive(false);
    setTextToDisplay('');
  };

  const gameProgress = () => {
    if (gameLength > 0 && isGameActive) {
      countPoints();
      setGameLength(gameLength - 1);
      setKey('');
      setColorToDisplay(COLORS[randomColorNumber]);
      setTextToDisplay(COLORS[randomTextNumber]);

      setTimeout(() => {
        setTick(!tick);
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header} >Krāsu Spēle</h1>
      <div className={styles.gameBody}>
        <Game
          count={count}
          textToDisplay={textToDisplay}
          colorToDisplay={colorToDisplay}
          gameLength={gameLength}
        />
        {isGameActive ? (
          <>
            <Button buttonClickHandler={endGame} label="Iziet" />
            <Button buttonClickHandler={resetGame} label="Mēģināt vēlreiz" />
          </>
        ) : (
          <Button buttonClickHandler={startGame} label='Sākt' />
        )}
      </div>
    </div>
  );
};
export default App;
