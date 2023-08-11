import cl from 'classnames';
import React from 'react';
import { IHProps } from '../types';
import styles from './P.module.scss';

export const P: React.FC<IHProps> = ({ children, className }) => (
  <p className={cl(styles.title, className)}>{children}</p>
);
