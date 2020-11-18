import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  label: string;
  buttonClickHandler: () => void;
}
const Button: FC<Props> = ({ buttonClickHandler, label }) => {
  return (
    <div  className={label=== 'Iziet' ? styles.buttonExit : styles.button} onClick={buttonClickHandler}>
      {label}
    </div>
  );
};

export default Button;
