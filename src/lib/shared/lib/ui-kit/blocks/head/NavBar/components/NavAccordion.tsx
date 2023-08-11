import { FC, useEffect, useRef, useState } from 'react';
import { SvgChevronDown } from '@ui/components/svg';
import { INavLink, INavStyleType } from '../navList';
import { NavLink } from './NavLink';
import styles from '../NavBar.module.scss';
import cl from 'classnames';
import { isProduction } from '@slonum/kit';

interface INavAccordionProps {
  title: string;
  inner: INavLink[];
  styleType: INavStyleType;
  className?: string;
}

export const NavAccordion: FC<INavAccordionProps> = (nav) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);

  const toggle = () => setOpen((o) => !o);

  useEffect(() => {
    if (!ref.current) return;
    const maxHeight = isOpen ? ref.current.scrollHeight : 0;
    ref.current.style.maxHeight = `${maxHeight}px`;
  }, [isOpen]);

  return (
    <ul className={cl(nav.className, styles.accordion)}>
      <button
        className={cl(styles.accordion__title, {
          [styles['accordion__title--open']]: isOpen,
        })}
        onClick={toggle}
      >
        {nav.title}
        <SvgChevronDown />
      </button>
      <ul className={styles.accordion__list} key={nav.title} ref={ref}>
        {nav.inner.map((item) => {
          if (item.isDev && isProduction) return null;
          return (
            <li key={item.title} className={styles.accordion__item}>
              <NavLink
                link={item.link}
                title={item.title}
                styleType="padding"
              />
            </li>
          );
        })}
      </ul>
    </ul>
  );
};
