import { FCC } from '@slonum/kit';
import { IHProps } from '../types';
import cl from 'classnames';
import styles from './H2.module.scss';

export const H2: FCC<IHProps> = ({ children, className, isWhite }) => (
  <h2
    className={cl(styles.title, className, isWhite ? styles.title_white : '')}
  >
    {children}
  </h2>
);
