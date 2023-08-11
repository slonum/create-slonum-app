import { FC } from 'react';
import { SvgChevronDown } from '@ui/components/svg';
import cl from 'classnames';
import styles from './LoggedProfile.module.scss';
import { screenLg } from '@ui/constants';

interface ILoggedButtonProps {
  toggleButton: boolean;
  profileOpenHandler: () => void;
  openBurgerMenu?: () => void;
}

export const LoggedButton: FC<ILoggedButtonProps> = ({
  toggleButton,
  profileOpenHandler,
  openBurgerMenu,
}) => {
  const onClickHandler = () => {
    const clientWidth = document.documentElement.clientWidth;
    if (openBurgerMenu && clientWidth < screenLg) {
      openBurgerMenu();
    } else {
      profileOpenHandler();
    }
  };

  return (
    <button
      aria-label="Открыть меню"
      className={cl(styles.profile__iconWrapper, {
        [styles['profile__iconWrapper--active']]: toggleButton,
      })}
      onClick={onClickHandler}
    >
      <SvgChevronDown className={cl(styles.profile__icon)} />
    </button>
  );
};
