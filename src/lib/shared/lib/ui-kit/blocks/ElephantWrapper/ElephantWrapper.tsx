import React, { useEffect, useRef } from 'react';
import ElephantHead from './elephantBody/ElephantHead';
import ElephantLeftPaw from './elephantBody/ElephantLeftPaw';
import ElephantRightPaw from './elephantBody/ElephantRightPaw';
import ElephantTrunk from './elephantBody/ElephantTrunk';
import styles from './ElephantWrapper.module.scss';
import cl from 'classnames';
interface IElephant {
  children?: React.ReactNode;
  left?: number;
  isInvisible?: boolean;
  isPopup?: boolean;
  className?: string;
}
export const ElephantWrapper: React.FC<IElephant> = ({
  children,
  left,
  isInvisible,
  isPopup,
  className,
}) => {
  const elephant = useRef(null);
  const handleResize = () => {
    if (window.innerWidth < 996 && left && elephant.current) {
      elephant.current.style.left = left / 2 + 'px';
    } else if (left && elephant.current) {
      elephant.current.style.left = left + 'px';
    }
  };
  useEffect(() => {
    document.addEventListener('resize', handleResize);
    return () => document.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={cl(
        styles.elephant,
        isInvisible && styles.elephant__invis,
        className,
      )}
    >
      <div
        ref={elephant}
        id="elephantTop"
        className={cl(
          styles.elephant__bodyWrapper,
          isPopup && styles.elephant__popup,
        )}
      >
        <ElephantHead />
        <ElephantLeftPaw />
        <ElephantRightPaw />
        <ElephantTrunk />
      </div>
      {children}
    </div>
  );
};
