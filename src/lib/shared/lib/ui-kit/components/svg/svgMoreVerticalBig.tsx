import { IClassName } from '@slonum/kit';
import React from 'react';

export const SvgMoreVerticalBig: React.FC<IClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
        stroke="#FF652F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2C11 2.55228 11.4477 3 12 3Z"
        stroke="#FF652F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
        stroke="#FF652F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgMoreVerticalBig;
