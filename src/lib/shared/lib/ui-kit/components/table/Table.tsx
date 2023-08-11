import { FC, ReactNode } from 'react';
import { CardContainer } from '../CardContainer';
import cl from 'classnames';
import styles from './Table.module.scss';

interface ITableProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

interface ICellProps {
  children?: ReactNode;
  size?: number;
  length?: number;
  className?: string;
}

export const Table: FC<ITableProps> = ({ children, className, title }) => {
  return (
    <CardContainer
      className={cl(className, styles.table)}
      classTitle={styles.table__title}
      title={title}
    >
      {children}
    </CardContainer>
  );
};

interface IRowProps {
  children?: ReactNode;
  className?: string;
  type?: 'head' | 'accent';
}

export const Row: FC<IRowProps> = ({ children, className, type }) => {
  return (
    <div
      className={cl(
        className,
        styles.table__row,
        styles['table__row--' + type],
      )}
    >
      {children}
    </div>
  );
};

export const Cell: FC<ICellProps> = ({ children, size, length, className }) => {
  let prc;
  if (size && length) {
    prc = Math.ceil((size * 100) / length);
  }
  return (
    <div
      className={cl(className, styles.table__cell)}
      style={{ width: `${prc ?? size}%` }}
    >
      {children}
    </div>
  );
};
