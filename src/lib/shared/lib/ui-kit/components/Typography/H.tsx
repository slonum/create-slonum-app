import { FCL } from '@slonum/kit';
import styles from './Typography.module.scss';
import cl from 'classnames';

interface IHProps {
  id?: string;
}

export const H1: FCL<IHProps> = ({ children, className, id }) => {
  return (
    <h1 id={id} className={cl(className, styles.title, styles.title__h1)}>
      {children}
    </h1>
  );
};
export const H2: FCL<IHProps> = ({ children, className, id }) => {
  return (
    <h2 id={id} className={cl(className, styles.title, styles.title__h2)}>
      {children}
    </h2>
  );
};
export const H3: FCL<IHProps> = ({ children, className, id }) => {
  return (
    <h3 id={id} className={cl(className, styles.title, styles.title__h3)}>
      {children}
    </h3>
  );
};
export const H4: FCL<IHProps> = ({ children, className, id }) => {
  return (
    <h4 id={id} className={cl(className, styles.title, styles.title__h4)}>
      {children}
    </h4>
  );
};
