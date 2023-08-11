import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  getIsCheckedState?: (type: string, isValid: boolean) => void;
  reference?: React.MutableRefObject<any>;
  isSub?: boolean;
  isChecked?: boolean;
  id?: string;
}

export const CheckboxInput: React.FC<ICheckboxProps> = ({
  getIsCheckedState,
  reference,
  isSub,
  isChecked = true,
  id,
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);
  useEffect(() => {
    if (isSub) {
      setChecked(true);
    }
  }, [isSub]);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  return (
    <>
      <input
        type="checkbox"
        ref={reference}
        className={classNames(styles['checkbox__input'], {
          [styles['checkbox__input--checked']]: isChecked,
        })}
        checked={checked}
        onChange={(e) => {
          if (getIsCheckedState)
            getIsCheckedState(
              isSub ? 'isAgreeSub' : 'isAgree',
              e.target.checked,
            );
          setChecked(e.target.checked);
        }}
      />
      <span className={styles['checkbox__tick']}>
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
      </span>
    </>
  );
};
