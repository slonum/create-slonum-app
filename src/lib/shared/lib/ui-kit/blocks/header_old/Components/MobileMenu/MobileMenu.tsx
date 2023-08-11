import React, { FC, memo, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { H4 } from '../../../../components/titles';
import { ChevronRight } from '../../../../components/svg';
import cl from 'classnames';
import styles from './MobileMenu.module.scss';
import { screenLg } from '@ui/constants';

type MenuItemTypes = 'cabinet' | 'page' | 'adminBlog';

export interface IMobileMenuItem {
  title: string;
  link?: string;
  onClick?: () => void;
  type?: MenuItemTypes;
  notype?: MenuItemTypes;
  clName?: string;
  inner?: { title: string; link: string }[];
  profileName?: string;
  isSubItem?: boolean;
}

interface IMobileMenuProps {
  active: boolean;
  className?: string;
  isBottom?: boolean;
  items: IMobileMenuItem[];
  type?: 'page' | 'cabinet';
  children?: React.ReactNode;
  isTouch?: 'top' | 'bottom';
  profileName?: string;
  close?: () => void;
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLDivElement>) => void;
}

// eslint-disable-next-line react/display-name
const Item: FC<IMobileMenuItem> = memo(
  ({ title, type, link, clName, onClick, inner, profileName }) => {
    const commonTitles = ['Личный кабинет', profileName, 'Выйти'];
    const [isExpanded, setIsExpanded] = useState(false);
    const isExpandable = !!inner;

    return (
      <button
        onClick={() => {
          onClick && onClick();
          if (isExpandable) {
            setIsExpanded((v) => !v);
          }
        }}
        className={cl(
          styles.item__button,
          styles['item__button--' + type],
          styles['item__button--' + clName],
          (commonTitles.includes(title) ||
            (title === profileName && type === 'cabinet')) &&
            styles['item__button--show'],
          title === profileName && styles['item__button--profile'],
          isExpanded && styles['item__button--expanded'],
          title === 'Помочь проекту' && styles['item__button--help'],
        )}
      >
        {link ? (
          <Link className={styles.item__link} href={link ?? '/'}>
            <H4
              className={cl(
                styles.item__name,
                styles['item__name--' + clName],
                title === profileName && styles['item__name--bold'],
                isExpanded && styles['item__name--expanded'],
              )}
            >
              {title}
              {(isExpandable || title === commonTitles[0]) && (
                <ChevronRight
                  className={cl(
                    styles.item__linkArrow,
                    styles['item__linkArrow--right'],
                  )}
                />
              )}
            </H4>
          </Link>
        ) : (
          <H4
            className={cl(
              styles.item__name,
              styles['item__name--' + clName],
              title === profileName && styles['item__name--bold'],
              isExpanded && styles['item__name--expanded'],
            )}
          >
            {title}
            {(isExpandable || title === commonTitles[0]) && (
              <ChevronRight
                className={cl(
                  styles.item__linkArrow,
                  title === commonTitles[0] && styles['item__linkArrow--right'],
                  isExpanded && styles['item__linkArrow--expanded'],
                )}
              />
            )}
          </H4>
        )}
        {isExpandable &&
          inner.map(({ link, title }) => (
            <div
              className={cl(
                styles.item__innerList,
                isExpanded && styles['item__innerList--expanded'],
              )}
              key={title}
            >
              <Link className={styles.item__link} href={link ?? '/'}>
                <H4
                  className={cl(
                    styles.item__name,
                    styles['item__name--' + clName],
                    styles['item__name--subitem'],
                  )}
                >
                  {title}
                </H4>
              </Link>
            </div>
          ))}
      </button>
    );
  },
);

export const MobileMenu: React.FC<IMobileMenuProps> = ({
  active,
  className,
  onTouchStart,
  onTouchEnd,
  children,
  type,
  isBottom,
  items,
  close,
  isTouch,
  profileName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && document.documentElement.clientWidth < screenLg) {
      document.body.classList.add('_lock');
    } else {
      document.body.classList.remove('_lock');
    }
  }, [active]);

  const mouseHandler = (event: any) => {
    const startY = event.targetTouches[0].pageY;
    const isTop = isTouch === 'top';
    let shiftY: number;

    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);

    function onMouseMove(event: any) {
      const Y = event.targetTouches[0].pageY;
      shiftY = isTop ? startY - Y : Y - startY;
      if (
        !containerRef.current ||
        (isTop && shiftY < 0) ||
        (!isTop && shiftY > 0)
      )
        return;
      containerRef.current.style.transform = `translate(0, ${shiftY}px)`;
    }

    function onMouseUp() {
      if (!containerRef.current) return;
      const { clientHeight } = containerRef.current;
      const prc = (shiftY * 100) / clientHeight;
      if (Math.abs(prc) > 30) {
        const dir = isTop ? 1 : -1;
        containerRef.current.style.transform = `translate(0, ${
          clientHeight * dir
        })`;
        setTimeout(() => {
          !!close && close();
        }, 100);

        setTimeout(() => {
          if (containerRef.current)
            containerRef.current.style.transform = 'translate(0, 0)';
        }, 700);
      } else if (!active) {
        containerRef.current.style.transform = 'translate(0, 0)';
      }
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
    }
  };

  const onTouchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    !!onTouchStart && onTouchStart(e);
    !!isTouch && mouseHandler(e);
  };

  const onTouchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    !!onTouchEnd && onTouchEnd(e);
  };

  return (
    <>
      <div
        className={cl(styles.menu, styles['menu--' + type], {
          [styles['menu--active']]: active,
        })}
        onTouchStart={onTouchStartHandler}
        onTouchEnd={onTouchEndHandler}
        ref={containerRef}
      >
        <div className={styles.menu__inner}>
          {items.map((item: any, index: number) => {
            if (item.type && item.type === 'children' && !isBottom)
              return children;
            if (item.type && item.type !== type) return null;
            if (item.notype && item.notype === type) return null;
            else
              return <Item {...item} profileName={profileName} key={index} />;
          })}
        </div>
        {isBottom && children}
      </div>
      {active && <div className={cl(styles['menu__head'])} />}

      <div
        onClick={() => {
          close && close();
        }}
        className={cl(styles['menu__bg'], {
          [styles['menu__bg--active']]: active,
        })}
      />
    </>
  );
};
