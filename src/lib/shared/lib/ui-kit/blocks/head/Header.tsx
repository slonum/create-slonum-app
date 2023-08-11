import { useObserver } from '@slonum/kit';
import { useRef } from 'react';
import { InnerHeader } from './InnerHeader';
import cl from 'classnames';
import styles from './Header.module.scss';

interface IHeaderProps {
  isAuth: boolean;
  isSticky?: boolean;
  isNoneBorder?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  isAuth,
  isSticky,
  isNoneBorder,
}) => {
  const ref = useRef<any>();
  const refHeader = useRef<HTMLDivElement>(null);

  const toggle = (visible: boolean) => {
    if (!isSticky) return;
    if (refHeader.current) {
      if (visible) {
        refHeader.current.classList.add(styles['header__wrapper--visible']);
      } else {
        refHeader.current.classList.remove(styles['header__wrapper--visible']);
      }
    }
  };

  useObserver({
    ref: ref,
    isInterTrue: () => toggle(false),
    isInterFalse: () => toggle(true),
  });

  return (
    <div className={styles.header}>
      <div
        className={cl(styles.header__wrapper, {
          [styles['header__wrapper-border']]: !isNoneBorder,
        })}
        ref={refHeader}
      >
        <InnerHeader isAuth={isAuth} />
      </div>
      <div className={styles.header__ref} ref={ref} />
    </div>
  );
};
