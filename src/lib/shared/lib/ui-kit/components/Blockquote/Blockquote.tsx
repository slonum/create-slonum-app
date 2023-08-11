import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Blockquote.module.scss';

export const Blockquote: FCL = ({ className, children }) => {
  return <p className={cl(className, styles.blockquote)}>{children}</p>;
};
