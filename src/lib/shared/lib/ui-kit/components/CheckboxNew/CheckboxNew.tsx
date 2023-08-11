/* eslint-disable indent */

import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { SvgCheckSimple } from './SvgCheckSimple';
import { CheckBoxNewPolicy } from './CheckBoxNewPolicy';
import { CheckBoxNewMailing } from './CheckBoxNewMailing';
import cl from 'classnames';
import styles from './CheckboxNew.module.scss';

type ICheckboxNewContent = 'policy' | 'mailing';

type ICheckboxNew = {
  content?: ICheckboxNewContent;
  children?: ReactNode;
  link?: string;
  isDefaultChecked?: boolean;
  className?: string;
};

const renderCheckBoxContent = (
  content: ICheckboxNewContent,
  children?: ReactNode,
) => {
  switch (content) {
    case 'policy':
      return <CheckBoxNewPolicy>{children}</CheckBoxNewPolicy>;
    case 'mailing':
      return <CheckBoxNewMailing />;
  }
};

export const CheckboxNew: FC<ICheckboxNew> = forwardRef<
  HTMLInputElement,
  ICheckboxNew
>(({ content, children, isDefaultChecked, className, ...props }, ref) => {
  return (
    <div className={cl(styles.checkbox, className)}>
      <div className={styles.checkbox__inputWrapper}>
        <input
          id={content}
          type="checkbox"
          content={content}
          className={styles.checkbox__input}
          defaultChecked={isDefaultChecked}
          {...props}
          ref={ref}
        />
        <SvgCheckSimple className={styles.checkbox__check} />
      </div>
      {!content ? (
        children && <p>{children}</p>
      ) : (
        <p className={styles.checkbox__text}>
          {renderCheckBoxContent(content, children)}
        </p>
      )}
    </div>
  );
});

CheckboxNew.displayName = 'CheckboxNew';
