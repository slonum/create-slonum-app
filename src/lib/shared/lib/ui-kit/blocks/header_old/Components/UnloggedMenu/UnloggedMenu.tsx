import React, { useState } from 'react';
import {
  DICTIONARY_WORDS,
  ENGLISH_WORDS,
  DRAWING_COMPETITION,
  BLOG_LINK,
  FCL,
  BASE_URL,
  isDev,
  isServer,
} from '@slonum/kit';
import { IMobileMenuItem, MobileMenu } from '../MobileMenu/MobileMenu';
import { modal } from '@ui/blocks/modal';
import { Button } from '@ui/components/Button';
import cl from 'classnames';
import styles from './UnloggedMenu.module.scss';

interface IUnloggedMenu {
  type?: 'page' | 'cabinet';
}

const MAIN_SUB = isDev ? 'https://dev.slonum.ru' : 'https://slonum.ru';
const DONATION = isServer ? MAIN_SUB : `${BASE_URL}:8088`;
const HELP_THE_PROJECT = DONATION + '/donation'; //todo обновить lib

export const UnloggedMenu: FCL<IUnloggedMenu> = ({
  type = 'page',
  className,
  children,
}) => {
  const [toggleButton, setToggleButton] = useState(false);

  const menuOpenHandler = () => {
    setToggleButton(!toggleButton);
  };

  const items: IMobileMenuItem[] = [
    {
      title: 'Тренажеры',
      clName: 'none',
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
      clName: 'none',
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
      title: 'Войти',
      onClick: () => {
        modal.open('PopupLogReg', {
          componentProps: { isLk: type === 'cabinet' },
        });
      },
    },
  ];

  return (
    <div className={styles.menu}>
      <Button
        className={cl(className, styles.menu__button)}
        variant="light"
        onClick={() => {
          modal.open('PopupLogReg', {
            componentProps: { isLk: type === 'cabinet' },
          });
        }}
      >
        Войти
      </Button>
      <button
        className={cl(styles.menu__burger, {
          [styles['menu__burger--active']]: toggleButton,
        })}
        onClick={menuOpenHandler}
      />
      <MobileMenu
        close={menuOpenHandler}
        active={toggleButton}
        items={items}
        isBottom={false}
        type={type}
      >
        {children}
      </MobileMenu>
    </div>
  );
};
