import {
  DICTIONARY_WORDS,
  ENGLISH_WORDS,
  DRAWING_COMPETITION,
  BLOG_LINK,
  FRACTION,
  MAIN,
  OLYMPIAD_MATH,
  CABINET,
  HELP_THE_PROJECT,
} from '@slonum/kit';

export interface INavLink {
  title: string;
  link: string;
  isDev?: boolean;
}

export type INavStyleType = 'accent' | 'padding' | 'hide-main';

export interface INavItem {
  title: string;
  link?: string;
  inner?: INavLink[];
  styleType?: INavStyleType;
  isHide?: boolean;
  isAuth?: boolean;
  isDev?: boolean;
}

export const navList: INavItem[] = [
  {
    title: 'Главная',
    link: MAIN,
    isHide: true,
  },
  {
    title: 'Кабинет',
    link: CABINET,
    isAuth: true,
  },
  {
    title: 'Тренажеры',
    inner: [
      {
        title: 'Словарные слова',
        link: DICTIONARY_WORDS,
      },
      {
        title: 'Английские слова',
        link: ENGLISH_WORDS,
      },
      {
        title: 'Дроби',
        link: FRACTION,
        isDev: true,
      },
    ],
    isHide: true,
  },
  {
    title: 'Мероприятия',
    inner: [
      {
        title: 'Конкурс рисунков',
        link: DRAWING_COMPETITION,
      },
      {
        title: 'Олимпиадная математика',
        link: OLYMPIAD_MATH,
        isDev: true,
      },
      {
        title: 'Олимпиадная математика (бесплатная)',
        link: `${OLYMPIAD_MATH}/free`,
        isDev: true,
      },
    ],
    isHide: true,
  },
  {
    title: 'Блог',
    link: BLOG_LINK,
    isHide: true,
    isDev: true,
  },
  {
    title: 'Помочь проекту ',
    link: HELP_THE_PROJECT,
    styleType: 'accent',
  },
];
