import React, { FC, useEffect, useRef, useState } from 'react';
import {
  BASE_URL,
  BLOG_LINK,
  CABINET,
  DICTIONARY_WORDS,
  DRAWING_COMPETITION,
  ENGLISH_WORDS,
  isDev,
  isServer,
  useCloseToggle,
} from '@slonum/kit';
import { ParentAvatar } from '@ui/components/avatar';
import { SvgArrowDown } from '@ui/components/svg';
import { IMobileMenuItem, MobileMenu } from '../MobileMenu/MobileMenu';
import cl from 'classnames';
import styles from './LoggedProfile.module.scss';
import { useAppDispatch, useAppSelector } from '@ui/redux';
import { authActions } from '@ui/redux/Auth/slice';

interface ILoggedProfile {
  type?: 'page' | 'cabinet';
  className: string;
  children: React.ReactNode;
  activeProfile?: any;
  isMobOpen?: boolean;
  switchProfile?: (data: { id: number; curId: number }) => void;
  OnboardCabinetStart?: FC<any>;
}

export const LoggedProfile: React.FC<ILoggedProfile> = ({
  type = 'page',
  className,
  children,
  activeProfile,
  isMobOpen,
  switchProfile,
  OnboardCabinetStart,
}) => {
  const loggedUser = useAppSelector((state) => state.user?.profile);
  const profileName = loggedUser?.fullName ?? 'Мой профиль';
  const [toggleButton, setToggleButton] = useState(false);
  const ref = useRef<any>();

  useCloseToggle(setToggleButton, toggleButton, ref);

  const dispatch = useAppDispatch();

  const profileOpenHandler = () => {
    setToggleButton(!toggleButton);
  };

  useEffect(() => {
    toggleButton && setToggleButton(!toggleButton);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobOpen]);

  const logout = async () => {
    await dispatch(authActions.logout());
  };

  const MAIN_SUB = isDev ? 'https://dev.slonum.ru' : 'https://slonum.ru';
  const DONATION = isServer ? MAIN_SUB : `${BASE_URL}:8088`;
  const HELP_THE_PROJECT = DONATION + '/donation';

  const items: IMobileMenuItem[] = [
    {
      title: profileName,
    },
    {
      title: 'Личный кабинет',
      link: `${CABINET}`,
      notype: 'cabinet',
      clName: 'line',
    },
    {
      title: 'Тренажеры',
      clName: 'line',
      notype: 'cabinet',
      inner: [
        {
          title: 'Словарные слова',
          link: DICTIONARY_WORDS,
        },
        {
          title: 'Английские слова',
          link: ENGLISH_WORDS,
        },
      ],
    },
    {
      title: 'Мероприятия',
      clName: 'line',
      notype: 'cabinet',
      inner: [
        {
          title: 'Конкурс рисунков',
          link: DRAWING_COMPETITION,
        },
      ],
    },
    {
      title: 'Блог',
      clName: 'none',
      link: BLOG_LINK,
    },
    {
      title: 'Помочь проекту',
      clName: 'none',
      link: HELP_THE_PROJECT,
    },
    {
      title: 'Выйти',
      onClick: () => {
        if (logout) logout();
      },
    },
  ];

  return (
    <div className={cl(className, styles.profile)} ref={ref}>
      {OnboardCabinetStart && (
        <>
          <OnboardCabinetStart type="child" step={2} />
          <OnboardCabinetStart type="parent" step={2} />
        </>
      )}
      <ParentAvatar
        module={type}
        activeProfile={activeProfile}
        loggedUser={loggedUser}
        switchProfile={switchProfile}
      />
      <button
        aria-label="Открыть меню"
        className={cl(
          styles.profile__iconWrapper,
          styles['profile__iconWrapper--' + 'draw'],
          {
            [styles['profile__iconWrapper--active']]: toggleButton,
          },
        )}
        onClick={profileOpenHandler}
      >
        <SvgArrowDown className={cl(styles.profile__icon)} />
      </button>
      <MobileMenu
        close={profileOpenHandler}
        active={toggleButton}
        items={items}
        profileName={profileName}
        isBottom={type === 'cabinet'}
        type={type}
        isTouch={'bottom'}
      >
        {children}
      </MobileMenu>
    </div>
  );
};
