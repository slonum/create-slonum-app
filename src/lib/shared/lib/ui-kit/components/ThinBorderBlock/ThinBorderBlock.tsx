import { FCL } from '@slonum/kit';
import styles from './ThinBorderBlock.module.scss';
import cl from 'classnames';

export const ThinBorderBlock: FCL = ({ className }) => {
  return <div className={cl(styles.border, className)}></div>;
};
