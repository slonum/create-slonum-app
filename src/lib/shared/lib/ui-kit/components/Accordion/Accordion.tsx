import { FC, useEffect, useRef, useState } from 'react';
import { SvgArrowDown } from '../svg';
import cl from 'classnames';
import styles from './Accordion.module.scss';

interface IAccordionProps {
  className?: string;
  classNameButton?: string;
  children?: React.ReactNode;
  head?: React.ReactNode;
}

export const Accordion: FC<IAccordionProps> = ({
  head,
  children,
  className,
  classNameButton,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const maxHeight = isOpen ? ref.current.scrollHeight : 0;
    ref.current.style.maxHeight = `${maxHeight}px`;
  }, [isOpen]);

  return (
    <div
      className={cl(className, styles.accordion, {
        [styles['accordion--open']]: isOpen,
      })}
    >
      <button
        className={cl(classNameButton, styles.flex, styles.accordion__button, {
          [styles['accordion__button--open']]: isOpen,
        })}
        onClick={() => setOpen((o) => !o)}
      >
        <SvgArrowDown />
        {head}
      </button>
      <div className={cl(styles.accordion__content)} ref={ref}>
        {children}
      </div>
    </div>
  );
};
