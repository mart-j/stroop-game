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
            <span className={styles.instructionHeader}>Spēles apraksts</span>
            <div className={styles.instructions}>
              <p>
                Spēles laukuā 10 reizes ik pēc 2 sekundēm parādās jauns vārds
              </p>
              <p>
                Jums noteiktajā laikā jānospiež atbilstošu taustiņu teksta
                krāsas pirmajam burtam (angļu valodā).
              </p>
              <div className={styles.luck}>Lai veicas 🤘</div>
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.red}>Zils</span> spied pogu
              <span className={styles.button}>S</span> jo tinte ir sarkana
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.green}>Sarkans</span> spied pogu
              <span className={styles.button}>Z</span> jo tinte ir zaļa
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.pink}>Dzeltens</span> spied pogu
              <span className={styles.button}>R</span> jo tinte ir rozā
            </div>
            <div className={styles.instructionContent}>
              <span className={styles.black}>Rozā</span> spied pogu
              <span className={styles.button}>M</span> jo tinte ir melna
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
