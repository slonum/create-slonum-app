import cl from 'classnames';
import React from 'react';
import { IHProps } from '../types';
import styles from './H5.module.scss';

export const H5: React.FC<IHProps> = ({ children, className }) => (
  <h5 className={cl(styles.title, className)}>{children}</h5>
);
