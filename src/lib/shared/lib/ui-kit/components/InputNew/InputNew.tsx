import React, { forwardRef } from 'react';
import { contentTypes } from '@slonum/kit';
import { FieldError } from 'react-hook-form';
import cn from 'classnames';
import styles from './InputNew.module.scss';

type IInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type IInputProps = {
  placeholder?: string;
  content: contentTypes;
  viewAnnotation?: boolean;
  className?: string;
  error?: FieldError;
} & Pick<
  IInputType,
  | 'onFocus'
  | 'defaultValue'
  | 'autoComplete'
  | 'disabled'
  | 'id'
  | 'type'
  | 'value'
  | 'onChange'
  | 'onBlur'
>;

export const InputNew: React.FC<IInputProps> = forwardRef<
  HTMLInputElement,
  IInputProps
>(
  (
    {
      placeholder,
      content,
      className,
      disabled,
      error,
      viewAnnotation,
      ...props
    },
    ref,
  ) => {
    const showPassword = (e: React.SyntheticEvent<EventTarget>) => {
      const toggleBtn = e.target as HTMLSpanElement;
      toggleBtn.classList.toggle(styles.input__toggle_on);
      const input = toggleBtn.nextSibling as HTMLElement;
      const type = input.getAttribute('type');
      if (type === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    };

    return (
      <div className={cn(styles.input__wrapper, className)}>
        {(content === 'password' || content === 'passwordConfirm') && (
          <span
            className={styles.input__toggle}
            onClick={(e) => showPassword(e)}
          />
        )}
        {viewAnnotation && (
          <>
            <div className={styles.input__alert} />
            <div className={styles.input__annotation}>
              <p className={styles.input__annotationText}>
                Личные данные ребенка нужны для выдачи персонального диплома
              </p>
            </div>
          </>
        )}
        <input
          {...(content === 'endingTime' && { id: 'date' })}
          placeholder=" "
          name={content}
          className={cn(
            styles.input__field,
            content === 'donate' ? styles.input__field_donate : '',
            content === 'url' ? styles.input__field_type : '',
            disabled && styles.input__field_disabled,
          )}
          {...props}
          ref={ref}
        />
        <span
          className={cn(styles.input__placeholder, {
            [styles.input__placeholder_type]: content === 'url',
          })}
        >
          {placeholder}
        </span>
        {error?.message && (
          <p className={styles.input__error}>{error.message}</p>
        )}
      </div>
    );
  },
);

InputNew.displayName = 'InputNew';
