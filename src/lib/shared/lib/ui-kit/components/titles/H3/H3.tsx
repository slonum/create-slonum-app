import cl from 'classnames';
import React from 'react';
import { IHProps } from '../types';
import styles from './H3.module.scss';

export const H3: React.FC<IHProps> = ({ children, className }) => (
  <h3 className={cl(styles.title, className)}>{children}</h3>
);
