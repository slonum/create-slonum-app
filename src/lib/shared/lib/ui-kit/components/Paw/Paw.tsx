import { FC, ReactNode } from 'react';
import { SvgPaw } from './SvgPaw';
import cl from 'classnames';
import styles from './Paw.module.scss';

interface IPawProps {
  children?: ReactNode;
  className?: string;
}

export const Paw: FC<IPawProps> = ({ children, className }) => {
  return (
    <div className={cl(styles.paw, className)}>
      <SvgPaw className={styles.paw__svg} />
      {(children === 0 || children) && (
        <p className={styles.paw__number}>{children}</p>
      )}
    </div>
  );
};
