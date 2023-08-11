import { FC } from 'react';
import cl from 'classnames';
import styles from './OlympiadRange.module.scss';

interface IOlympiadRange {
  className?: string;
}

export const OlympiadRange: FC<IOlympiadRange> = ({ className }) => {
  return (
    <ul className={cl(className, styles.range)}>
      <li className={styles.range__item}>
        <span>1-2 Класс </span>
        <span>1.5 часа</span>
      </li>
      <li className={styles.range__item}>
        <span>3-6 Класс </span>
        <span>2 часа</span>
      </li>
      <li className={styles.range__item}>
        <span>7-9 Класс </span>
        <span>2.5 часа</span>
      </li>
    </ul>
  );
};
