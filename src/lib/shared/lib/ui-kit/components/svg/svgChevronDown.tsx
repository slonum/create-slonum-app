import { FCL } from '@slonum/kit';
export const SvgChevronDown: FCL = ({ className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 6L8 12L14 6"
        stroke="#1F1D2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
