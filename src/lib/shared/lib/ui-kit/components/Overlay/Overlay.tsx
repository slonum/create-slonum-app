import cl from 'classnames';
import { FC, useEffect } from 'react';
import styles from './Overlay.module.scss';

interface IOverlayProps {
  isActive: boolean;
  close: () => void;
  className?: string;
}

export const Overlay: FC<IOverlayProps> = ({ isActive, close, className }) => {
  useEffect(() => {
    if (!isActive) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isActive]);

  if (!isActive) return null;
  return <div className={cl(className, styles.overlay)} onClick={close} />;
};
