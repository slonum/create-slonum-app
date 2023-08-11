import { FC, MutableRefObject, useRef, useState } from 'react';
import cl from 'classnames';
import styles from './MoreMenu.module.scss';
import { SvgMoreVerticalBig } from '../svg';
import { useCloseToggle } from '@slonum/kit';

interface IMoreMenu {
  items: { title: string; onClick: (args: any) => void }[];
  checkMenuInScrollbar?: boolean;
  contentRef?: MutableRefObject<Element | HTMLElement>;
}

export const MoreMenu: FC<IMoreMenu> = ({
  items,
  checkMenuInScrollbar,
  contentRef,
}) => {
  const [direction, setDirection] = useState<'bottom' | 'top'>('bottom');
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const listRef = useRef(null);
  useCloseToggle(setIsOpen, isOpen, menuRef);

  const pos = () => {
    const li = menuRef.current.closest('li');
    const liPosition = li.offsetTop;
    const scrollCont = contentRef.current;
    if (!scrollCont) return;
    const scrollContainerHeight = scrollCont.getBoundingClientRect().height;
    const containerScrollTop = scrollCont.scrollTop;

    /* get list height by multiplying its height by items length, cause it's not visible yet */
    const listHeight = 44 * items.length;
    const direction =
      scrollContainerHeight - liPosition - containerScrollTop <
        listHeight + 10 && liPosition - containerScrollTop > listHeight
        ? 'top'
        : 'bottom';

    setDirection(direction);
  };

  const openMenu = () => {
    if (checkMenuInScrollbar) {
      pos();
    }
    setIsOpen((o) => !o);
  };

  return (
    <div className={styles.more} ref={menuRef}>
      <button className={styles.more__button} onClick={openMenu}>
        <SvgMoreVerticalBig />
        <ul
          ref={listRef}
          className={cl(
            styles.more__menu,
            styles[`more__menu--${direction}`],
            isOpen && styles['more__menu--open'],
          )}
        >
          {items.map((item) => (
            <li
              className={styles.more__menuItem}
              key={item.title}
              onClick={item.onClick}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
};
