import { FC } from 'react';
import cl from 'classnames';
import styles from './Loader.module.scss';

export interface ILoaderProps {
  className?: string;
  type?: 'gray';
}

export const Loader: FC<ILoaderProps> = ({ className, type }) => {
  return (
    <div
      className={cl(className, styles['lds-dual-ring'], {
        [styles['lds-dual-ring--' + type]]: type,
      })}
    />
  );
};
