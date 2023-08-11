import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useCloseToggle } from '@slonum/kit';
import { SvgArrowDown } from '../svg';
import { H4 } from '../titles';
import { Checkbox } from '../Checkbox';
import cl from 'classnames';
import styles from './Input.module.scss';

export interface IDropDownItem {
  title: string;
  sub: React.ReactElement;
}

interface IDropDownListProps {
  className?: string;
  list: string[] | IDropDownItem[];
  onClick?: (value: any) => void;
  onChange?: () => void;
  placeholder: string;
  title?: string;
  defaultValue?: string | number[];
  stylePar?: any;
  isModal?: boolean;
  isOpen?: boolean;
  isToggle?: boolean;
  children?: React.ReactNode;
  isMultiCheck?: boolean;
  multiTitle?: string;
  multiChange?: (value: any[]) => void;
  changeClass?: (type: string, value: string) => void;
  changeListClass?: (value: number[]) => void;
  noScroll?: boolean;
  changeValue?: (value: string) => void;
}

export const DropDownList: FC<IDropDownListProps> = ({
  className,
  children,
  onChange,
  list,
  onClick,
  placeholder,
  defaultValue,
  title,
  stylePar,
  isModal,
  isOpen,
  isToggle,
  isMultiCheck,
  multiTitle,
  multiChange,
  changeClass,
  changeListClass,
  noScroll = false,
  changeValue,
}) => {
  const [toggle, setToggle] = useState(isOpen);
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  const [multiValue, setMultiValue] = useState<number[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  useCloseToggle(toggleCallback, toggle, ref);

  function toggleCallback(t: boolean) {
    if (isToggle) {
      setToggle(t);
    }
  }

  useEffect(() => {
    if (defaultValue && changeListClass && Array.isArray(defaultValue)) {
      const numArr = defaultValue.map((i) => +i);
      changeListClass(numArr);
      setMultiValue(numArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (defaultValue === 'Выберите класс') {
      setMultiValue([]);
    } else if (
      typeof defaultValue === 'string' &&
      !defaultValue.startsWith('Выбран')
    ) {
      const numArr = defaultValue?.split(', ');
      if (numArr.length) setMultiValue(numArr.map((i) => +i));
    }
  }, [defaultValue]);

  const scrollHandler = (e: any) => {
    e.stopPropagation();
    const clientHeight = listRef.current?.clientHeight ?? 0;
    const end = (listRef.current?.scrollHeight ?? 0) - clientHeight;
    const scrollTop = Math.round(listRef.current?.scrollTop ?? 0);
    const h = scrollRef.current?.clientHeight ?? 0;
    const top = (scrollTop * (clientHeight - h - 40)) / end;
    if (scrollRef.current) {
      scrollRef.current.style.top = top + 80 + 'px';
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

      if (newTop < 80) {
        newTop = 80;
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
      const top = Math.floor((newTop * end) / (clientHeight - h - 40) - 81);
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

  const clickHandler = (index: number, item: string, isChecked: boolean) => {
    onClick && onClick({ index, value: item });
    if (!isMultiCheck) {
      setValue(item);
      setToggle(false);
      if (changeValue) {
        changeValue(item);
      }
    } else {
      if (isChecked) {
        setMultiValue((v) => v.filter((i) => i !== index));
      } else setMultiValue((v) => [...v, index].sort((a, b) => a - b));
    }
  };

  useEffect(() => {
    if (multiValue.length > 1) {
      setValue(multiValue.toString());
      multiChange && multiChange(multiValue);
      if (changeClass) {
        const valueToString = multiValue.map((el) => el.toString()).join(', ');
        changeClass('classes', valueToString);
      }
      if (changeListClass) changeListClass(multiValue);
    } else if (multiValue.length === 0 && changeListClass) {
      changeListClass([]);
      setValue('Выберите класс');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiValue]);

  return (
    <div
      className={cl(
        styles.input__wrapper,
        className,
        styles.drop,
        stylePar && {
          [stylePar['drop--active']]: stylePar && toggle,
        },
      )}
      ref={ref}
    >
      <div
        className={cl(styles.drop__icon, {
          [styles['drop__icon--active']]: toggle,
        })}
      >
        <SvgArrowDown />
      </div>
      <input
        aria-label={defaultValue?.toString()}
        readOnly
        placeholder={''}
        type={'text'}
        name={'DropDownList'}
        value={value.toString()}
        onChange={(e) => e.preventDefault()}
        className={cl(
          styles.input__field,
          styles.drop__input,
          {
            [styles['drop__input--active']]: toggle,
            [styles['drop__input--mult']]: isMultiCheck,
          },
          isOpen && styles['input__field-class'],
        )}
        onClick={() => {
          if (!isModal && !isOpen) setToggle(!toggle);
        }}
      />
      {!isOpen && (
        <span className={styles.input__placeholder}>{placeholder}</span>
      )}
      {!isModal && (
        <div
          className={cl(styles.drop__inner, {
            [styles['drop__inner--active']]: toggle,
          })}
        >
          <H4
            className={cl(
              styles.drop__title,
              isOpen && styles['drop__title-modal'],
            )}
          >
            {title ?? placeholder}
          </H4>
          <ul
            ref={listRef}
            className={cl(styles.drop__list, {
              [styles['drop__list--active']]: toggle,
            })}
            onScroll={(e) => scrollHandler(e)}
            id={'scrollDrop'}
          >
            {list.map((i, index) => {
              const item = typeof i === 'string' ? i : i.title;
              const isChecked = multiValue.includes(index);
              return (
                <li
                  key={item}
                  className={cl(styles.drop__item, {
                    [styles.flex]: isMultiCheck,
                  })}
                  onClick={() => clickHandler(index, item, isChecked)}
                >
                  {typeof i === 'string' ? i : i.sub}
                  {isMultiCheck && (
                    <Checkbox type="light" isChecked={isChecked} />
                  )}
                </li>
              );
            })}
          </ul>
          {!noScroll && (
            <div
              ref={scrollRef}
              className={cl(styles.drop__scroll, {
                [styles['drop__scroll--active']]: toggle,
              })}
              onMouseDown={mouseHandler}
              onTouchStart={mouseHandler}
              onDragStart={() => {
                return false;
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
