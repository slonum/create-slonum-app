import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import styles from './Checkbox.module.scss';

interface ICheckboxLinkProps {
  href: string;
  text: string;
  color: 'gray' | 'green' | 'white';
}

export const CheckboxLink: React.FC<ICheckboxLinkProps> = ({
  href,
  text,
  color,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={classnames([
        styles['checkbox__link'],
        styles[`checkbox__link--${color}`],
      ])}
    >
      {text}
    </Link>
  );
};
