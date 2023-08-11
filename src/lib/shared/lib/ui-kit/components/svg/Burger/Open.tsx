import { FCL } from '@slonum/kit';

export const SvgBurgerOpen: FCL = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="24" width="30" height="3" rx="1.5" fill="#1F1D2A" />
      <rect x="1" y="6" width="30" height="3" rx="1.5" fill="#1F1D2A" />
      <rect x="1" y="15" width="30" height="3" rx="1.5" fill="#1F1D2A" />
    </svg>
  );
};
