import { FCL } from '@slonum/kit';

export const SvgReturn: FCL = ({ className }) => {
  return (
    <svg
      className={className}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgReturn;
