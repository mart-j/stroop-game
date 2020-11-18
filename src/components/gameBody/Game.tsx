import React, { FC } from 'react';
import styles from './Game.module.scss';

interface Props {
  gameLength: number;
  count: number;
  colorToDisplay: string;
  textToDisplay: string;
}

const Game: FC<Props> = ({
  textToDisplay,
  colorToDisplay,
  gameLength,
  count,
}) => {
  return (
    <div className={styles.gameWrapper}>
      <div className={styles.instructions}>
        {gameLength === 11 ? (
          <>
            <span className={styles.instructionHeader}>Noteikumi</span>
            <div className={styles.instructionContent}>
              <span className={styles.red}>Green</span> spied pogu{' '}
              <span className={styles.button}>R</span> jo tinte ir sarkana
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.green}>Yellow</span> spied pogu{' '}
              <span className={styles.button}>G</span> jo tinte ir zaļa
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.blue}>Blue</span> spied pogu{' '}
              <span className={styles.button}>B</span> jo tinte ir zila
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.yellow}>Red</span> spied pogu{' '}
              <span className={styles.button}>Y</span> jo tinte ir dzeltena
            </div>
          </>
        ) : (
          `Tev ir atlikuši ${gameLength} piegājieni!`
        )}
      </div>
      {gameLength !== 11 && (
        <div className={styles.pointCount}>
          Tavs punktu skaits ir <span>{count}/10</span>
        </div>
      )}
      <h1 className={styles.color} style={{ color: colorToDisplay }}>
        {gameLength > 0 && textToDisplay}
      </h1>
    </div>
  );
};
export default Game;
