import cl from 'classnames';
import React from 'react';
import { IHProps } from '../types';
import styles from './H4.module.scss';

export const H4: React.FC<IHProps> = ({ children, className }) => (
  <h4 className={cl(styles.title, className)}>{children}</h4>
);
