import { FC } from 'react';
import { IClassName } from '@slonum/kit';

export const SvgCheckSimple: FC<IClassName> = ({ className }) => {
  return (
    <svg
      className={className}
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
  );
};
