import { FC } from 'react';
import { ILoaderProps } from './Loader';
import styles from './Loader.module.scss';
import cl from 'classnames';

export const ImgLoader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={cl(className, styles['lds-default'])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ImgLoader;
