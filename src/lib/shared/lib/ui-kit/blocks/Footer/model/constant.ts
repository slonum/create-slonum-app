import {
  DRAWING_COMPETITION,
  DICTIONARY_WORDS,
  BLOG_LINK,
  ENGLISH_WORDS,
  CABINET,
  MAIN,
  HELP_THE_PROJECT,
} from '@slonum/kit';
import { IFooterNavItem } from './types';

export const footerNavBar: Record<
  'platform' | 'coop' | 'contacts',
  IFooterNavItem[]
> = {
  contacts: [{ title: 'Реквизиты', link: `${MAIN}/contacts` }],
  platform: [
    { title: 'Главная', link: `${MAIN}` },
    { title: 'Личный кабинет', link: `${CABINET}` },
    { title: 'Конкурс рисунков', link: `${DRAWING_COMPETITION}` },
    { title: 'Английский язык', link: `${ENGLISH_WORDS}` },
    { title: 'Словарные слова', link: `${DICTIONARY_WORDS}` },
    { title: 'Блог', link: `${BLOG_LINK}` },
  ],
  coop: [
    { title: 'О компании', link: `${MAIN}/about` },
    { title: 'Помочь проекту', link: HELP_THE_PROJECT, isDonation: true },
  ],
};

export const footerSocialList = [
  { socialName: 'vk', href: 'https://vk.com/slonum/' },
  { socialName: 'ok', href: 'https://ok.ru/slonum/' },
  { socialName: 'telegram', href: 'https://t.me/slonum_ru' },
  { socialName: 'dzen', href: 'https://dzen.ru/slonum' },
  { socialName: 'pinterest', href: 'https://ru.pinterest.com/slonum/' },
  { socialName: 'rutube', href: 'https://rutube.ru/channel/27936152/' },
  {
    socialName: 'youtube',
    href: 'https://www.youtube.com/channel/UC2xoDUc0J8PruqGFrBqsJWg',
  },
  {
    socialName: 'mail',
    href: 'mailto:info@slonum.ru',
  },
];
