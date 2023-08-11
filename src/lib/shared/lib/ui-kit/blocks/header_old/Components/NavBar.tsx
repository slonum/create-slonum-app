import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  ADMIN_URL,
  ARTICLES,
  BANNERS,
  DICTIONARY_WORDS,
  DRAWING_COMPETITION,
  ENGLISH_WORDS,
  HELP_THE_PROJECT,
} from '@slonum/kit';
import { SvgChevronDown } from '@ui/components/svg';
import cl from 'classnames';
import styles from '../header.module.scss';

type Basenav = {
  title: string;
  link: string;
  type?: 'accent';
};
type Navlist =
  | Basenav
  | {
      title: string;
      inner: Basenav[];
    };

interface INavBarProps {
  type?: 'main' | 'adminBlog';
  isMobile?: boolean;
  isAdmin: boolean;
}

export const NavBar: FC<INavBarProps> = ({
  type = 'main',
  isMobile,
  isAdmin,
}) => {
  const router = useRouter();
  const isBanner = router.asPath.includes('banner');
  const navList: Navlist[] = [
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
      ],
    },
    {
      title: 'Мероприятия',
      inner: [
        {
          title: 'Конкурс рисунков',
          link: DRAWING_COMPETITION,
        },
      ],
    },
    // {
    //   title: 'Блог',
    //   link: BLOG_LINK,
    // },
    {
      title: 'Помочь проекту ',
      link: HELP_THE_PROJECT,
      type: 'accent',
    },
  ];

  const blogAdminList = [
    {
      title: 'Статьи',
      link: ARTICLES,
      type: isBanner ? 'gray' : '',
    },
    {
      title: 'Баннеры',
      link: BANNERS,
      type: isBanner ? '' : 'gray',
    },
  ];

  const currentNav: any = type === 'adminBlog' ? blogAdminList : navList;

  if (isAdmin) {
    currentNav.push({
      title: 'Админ-панель',
      link: ADMIN_URL,
    });
  }

  return (
    <nav
      className={cl(styles.navbar, {
        [styles['navbar--mobile']]: isMobile,
      })}
    >
      <ul className={styles.navbar__list}>
        {currentNav.map((nav: Navlist) => {
          if ('inner' in nav) {
            return (
              <ul className={styles.navbar__inner} key={nav.title}>
                <li className={styles.navbar__innerTitle}>
                  {nav.title}
                  <SvgChevronDown />
                </li>
                <ul className={styles.navbar__innerList} key={nav.title}>
                  {nav.inner.map((item) => (
                    <li key={item.title} className={styles.navbar__innerItem}>
                      <Link
                        key={item.title}
                        href={item.link}
                        className={cl(
                          styles.navbar__link,
                          styles['navbar__link--' + type],
                          {
                            [styles['navbar__link--' + item.type]]: !!item.type,
                          },
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
            );
          } else {
            return (
              <ul className={styles.navbar__inner} key={nav.title}>
                <Link
                  href={nav.link}
                  className={cl(
                    styles.navbar__link,
                    styles['navbar__link--' + type],
                    {
                      [styles['navbar__link--' + nav.type]]: !!nav.type,
                    },
                  )}
                >
                  {nav.title}
                </Link>
              </ul>
            );
          }
        })}
      </ul>
    </nav>
  );
};
