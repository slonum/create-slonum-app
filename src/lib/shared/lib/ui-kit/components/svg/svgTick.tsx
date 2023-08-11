import { FCL } from '@slonum/kit';

export const SvgTick: FCL = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.9999L10.3333 15.5999L25 2.3999"
        stroke="#14A76C"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgTick;
