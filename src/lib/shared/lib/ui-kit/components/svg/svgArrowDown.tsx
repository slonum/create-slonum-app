import { FCL } from '@slonum/kit';

export const SvgArrowDown: FCL = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#9FA0A7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
