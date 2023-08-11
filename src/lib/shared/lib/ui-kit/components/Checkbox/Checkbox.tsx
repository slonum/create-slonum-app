import React, { useEffect, useState } from 'react';
import cl from 'classnames';
import styles from './Checkbox_.module.scss';

interface ICheckboxProps {
  getIsCheckedState?: (value: boolean) => void;
  reference?: React.MutableRefObject<any>;
  isChecked?: boolean;
  type?: 'main' | 'light';
  name?: string;
  className?: string;
  classNameTick?: string;
  classNameLabel?: string;
  label?: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  getIsCheckedState,
  reference,
  isChecked = false,
  type = 'main',
  name,
  className,
  label,
  classNameLabel,
  classNameTick,
}) => {
  const [checked, setChecked] = useState(isChecked);
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  return (
    <div className={cl(className, styles.checkbox)}>
      <input
        name={name}
        type="checkbox"
        ref={reference}
        className={styles['checkbox__input']}
        checked={checked}
        onChange={(e) => {
          !!getIsCheckedState && getIsCheckedState(e.target.checked);
          setChecked(e.target.checked);
        }}
      />
      <div
        className={cl(
          classNameTick,
          styles['checkbox__tick'],
          styles['checkbox__tick--' + type],
          {
            [styles['checkbox__checked--' + type]]: checked,
          },
        )}
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L4.33333 7L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {!!label && (
        <p className={cl(classNameLabel, styles['checkbox__label'])}>{label}</p>
      )}
    </div>
  );
};
