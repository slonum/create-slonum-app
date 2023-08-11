/* eslint-disable indent */
import React from 'react';
import styles from './Checkbox.module.scss';
import cl from 'classnames';

interface ICheckboxProps {
  color: 'green' | 'white' | 'gray';
  isSubBlock?: boolean;
  children?: React.ReactNode;
  isHeader?: boolean;
}

export const CheckboxLabel: React.FC<ICheckboxProps> = ({
  isSubBlock,
  color,
  children,
  isHeader,
}) => {
  return (
    <label
      className={cl(
        isSubBlock
          ? styles['checkbox__label']
          : cl([styles['checkbox__label'], styles['checkbox__label--black']]),
        isHeader &&
          cl(
            styles['checkbox__label--gray'],
            styles['checkbox__label--header'],
          ),
      )}
    >
      {children}
    </label>
  );
};
