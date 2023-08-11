import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Typography.module.scss';

export const Caption: FCL = ({ children, className }) => {
  return <p className={cl(className, styles.caption)}>{children}</p>;
};
