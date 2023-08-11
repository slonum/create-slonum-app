import { FC, useEffect, useRef, useState } from 'react';
import { useCloseToggle } from '@slonum/kit';
import { ParentAvatar } from '@ui/components/avatar';
import { useAppSelector } from '@ui/redux';
import { LoggedButton } from './LoggedButton';
import { ILoggedModule } from './types';
import cl from 'classnames';
import styles from './LoggedProfile.module.scss';
import { LoggedMenu } from './LoggedMenu';

interface ILoggedProfile {
  module?: ILoggedModule;
  className: string;
  activeProfile?: any; //todo типизировать
  OnboardCabinetStart?: FC<any>;
  switchProfile?: (data: { id: number; curId: number }) => void;
  openBurgerMenu?: () => void;
}

export const LoggedProfileMenu: FC<ILoggedProfile> = ({
  module = 'page',
  className,
  activeProfile,
  OnboardCabinetStart,
  switchProfile,
  openBurgerMenu,
}) => {
  const loggedUser = useAppSelector((state) => state.user?.profile);
  const [toggleButton, setToggleButton] = useState(false);
  const ref = useRef<any>();

  useCloseToggle(setToggleButton, toggleButton, ref);

  const profileOpenHandler = () => {
    setToggleButton(!toggleButton);
  };

  useEffect(() => {
    toggleButton && setToggleButton(!toggleButton);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cl(className, styles.profile)} ref={ref}>
      {OnboardCabinetStart && (
        <>
          <OnboardCabinetStart type="child" step={2} />
          <OnboardCabinetStart type="parent" step={2} />
        </>
      )}
      <ParentAvatar
        module={module}
        activeProfile={activeProfile}
        loggedUser={loggedUser}
        switchProfile={switchProfile}
      />
      <LoggedButton
        toggleButton={toggleButton}
        profileOpenHandler={profileOpenHandler}
        openBurgerMenu={openBurgerMenu}
      />
      <LoggedMenu isActive={toggleButton} module={module} user={loggedUser} />
    </div>
  );
};
