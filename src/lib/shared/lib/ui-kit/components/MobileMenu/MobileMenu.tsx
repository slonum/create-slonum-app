import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './MobileMenu.module.scss';

interface IMobileMenuProps {
  isVisible?: boolean;
}

export const MobileMenu: FCL<IMobileMenuProps> = ({
  className,
  children,
  isVisible,
}) => {
  return (
    <div
      className={cl(className, styles.menu, {
        [styles['menu--visible']]: isVisible,
      })}
    >
      {children}
    </div>
  );
};
