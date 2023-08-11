import { FCC } from '@slonum/kit';
import { IHProps } from '../types';
import cl from 'classnames';
import styles from './H1.module.scss';

export const H1: FCC<IHProps> = ({ isWhite, children, className }) => (
  <h1
    className={cl(styles.title, className, {
      [styles.title_white]: isWhite,
    })}
  >
    {children}
  </h1>
);
