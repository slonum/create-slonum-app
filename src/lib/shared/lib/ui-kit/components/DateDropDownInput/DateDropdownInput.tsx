import cl from 'classnames';
import React, { FC, useMemo, useRef, useState } from 'react';

import styles from './Input.module.scss';
import { useCloseToggle } from '@slonum/kit';
import { SvgArrowDown } from '../svg';
import { H4 } from '../titles';
import { contentTypesNew } from '@ui/types';

interface IDropDownItem {
  title: string;
  sub: React.ReactElement;
}

interface IDropDownListProps {
  className?: string;
  list: string[] | IDropDownItem[];
  onClick: (value: any) => void;
  onChange?: () => void;
  placeholder: string;
  title?: string;
  defaultValue?: string;
  stylePar?: any;
  isModal?: boolean;
  isOpen?: boolean;
  isToggle?: boolean;
  ariaLabel: string;
  name: string;
  form: string;
  type: 'day' | 'month' | 'year';
  content: contentTypesNew;
}

export const DateDropDownInput: FC<IDropDownListProps> = ({
  className,
  onChange,
  list,
  onClick,
  placeholder,
  defaultValue,
  title,
  stylePar,
  isModal,
  isOpen,
  isToggle = true,
  ariaLabel,
  type,
  name,
  form,
  content,
}) => {
  const [toggle, setToggle] = useState(isOpen);
  const [value, setValue] = useState(defaultValue ?? '');
  const listRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // const ref = useRef(document.getElementById(form));
  const ref = useRef(null);

  useCloseToggle(toggleCallback, toggle, ref);

  function toggleCallback(t: boolean) {
    if (isToggle) {
      setToggle(false);
    }
  }

  useMemo(() => {
    if (defaultValue && defaultValue !== 'empty') setValue(defaultValue);
  }, [defaultValue]);

  const scrollHandler = () => {
    const clientHeight = listRef.current?.clientHeight ?? 0;
    const end = (listRef.current?.scrollHeight ?? 0) - clientHeight;
    const scrollTop = Math.round(listRef.current?.scrollTop ?? 0);
    const h = scrollRef.current?.clientHeight ?? 0;
    const top = (scrollTop * (clientHeight - h - 40)) / end;
    if (scrollRef.current) {
      scrollRef.current.style.top = top + 60 + 'px';
    }
  };

  const mouseHandler = function (event: any) {
    if (event.type !== 'touchstart') event.preventDefault();
    const Y = event.clientY ?? event.targetTouches[0].pageY;

    const shiftY = Y - scrollRef.current!.getBoundingClientRect().top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);

    function onMouseMove(event: any) {
      const Y = event.clientY ?? event.targetTouches[0].pageY;
      let newTop =
        Y - shiftY - listRef.current!.getBoundingClientRect().top + 60;

      if (newTop < 60) {
        newTop = 60;
      }
      const rightEdge =
        listRef.current!.offsetHeight - scrollRef.current!.offsetHeight + 40;
      if (newTop > rightEdge) {
        newTop = rightEdge;
      }

      scrollRef.current!.style.top = newTop + 'px';
      const clientHeight = listRef.current?.clientHeight ?? 0;
      const end = (listRef.current?.scrollHeight ?? 0) - clientHeight;
      const h = scrollRef.current?.clientHeight ?? 0;
      const top = Math.floor((newTop * end) / (clientHeight - h - 40) - 61);
      const list = document.querySelector('#scrollDrop');
      if (list) list.scrollTo(0, top);
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
    }

    function preventDefault(event: any) {
      event.preventDefault();
    }
  };
  return (
    <div
      className={cl(
        styles.input__wrapper,
        styles[`dropDate__wrapper--${type}`],
        className,
        styles.dropDate,
        stylePar && {
          [stylePar['drop--active']]: stylePar && toggle,
        },
      )}
      ref={ref}
    >
      <div
        className={cl(styles.dropDate__icon, {
          [styles['drop__icon--active']]: toggle,
        })}
      >
        <SvgArrowDown />
      </div>
      <input
        aria-label={ariaLabel}
        readOnly
        placeholder=""
        form={form}
        type={'text'}
        content={content}
        name={name}
        value={value as string}
        onChange={(e) => e.preventDefault()}
        className={cl(
          styles.input__field,
          styles.dropDate__input,
          styles[`dropDate__input--${type}`],
          {
            [styles['dropDate__input--active']]: toggle,
          },
        )}
        onClick={() => {
          if (!isModal && !isOpen) setToggle(!toggle);
        }}
      />
      <div
        className={cl(styles.dropDate__inner, {
          [styles['dropDate__inner--active']]: toggle,
        })}
      >
        <H4
          className={cl(
            styles.dropDate__title,
            {
              [styles['dropDate__title--open']]: isOpen,
            },
            value.length && styles['dropDate__title--notEmpty'],
          )}
        >
          {value.length ? value : placeholder}
        </H4>
        <ul
          ref={listRef}
          className={cl(styles.dropDate__list, {
            [styles['dropDate__list--active']]: toggle,
          })}
          onScroll={() => scrollHandler()}
          id={'scrollDrop'}
        >
          {list.map((i, index) => {
            const item = typeof i === 'string' ? i : i.title;
            return (
              <li
                key={item}
                className={styles.dropDate__item}
                onClick={() => {
                  setValue(item);
                  setToggle(false);
                  onClick(item);
                }}
              >
                {typeof i === 'string' ? i : i.sub}
              </li>
            );
          })}
        </ul>
        <div
          ref={scrollRef}
          className={cl(styles.drop__scroll, styles['drop__scroll--date'], {
            [styles['drop__scroll--active']]: toggle,
          })}
          onMouseDown={mouseHandler}
          onTouchStart={mouseHandler}
          onDragStart={() => {
            return false;
          }}
        />
      </div>
    </div>
  );
};
