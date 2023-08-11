import { FC } from 'react';
import { IClassName } from '@slonum/kit';

export const SvgScrollColumn: FC<IClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      width="30"
      height="91"
      viewBox="0 0 30 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H26C28.2091 0.5 30 2.29086 30 4.5C30 6.36384 28.7252 7.92994 27 8.37398V82.626C28.7252 83.0701 30 84.6362 30 86.5C30 88.7091 28.2091 90.5 26 90.5H4C1.79086 90.5 0 88.7091 0 86.5C0 84.2909 1.79086 82.5 4 82.5L4 8.5C1.79086 8.5 0 6.70914 0 4.5Z"
        fill="#FEBA1B"
      />
    </svg>
  );
};

export default SvgScrollColumn;
