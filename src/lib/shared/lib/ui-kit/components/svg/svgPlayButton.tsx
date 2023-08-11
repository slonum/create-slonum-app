import { FCL } from '@slonum/kit';
export const SvgPlayButton: FCL = ({ className }) => {
  return (
    <svg
      width="151"
      height="150"
      viewBox="0 0 151 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="75.5" cy="75" r="60" fill="#FF652F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65 59.7308C65 57.0375 67.9147 55.3535 70.248 56.6986L95.2782 71.1279C97.5886 72.4598 97.6202 75.783 95.3356 77.1585L70.3054 92.2291C67.9726 93.6337 65 91.9537 65 89.2307V59.7308ZM70 62.3269V86.5766L90.5755 74.1882L70 62.3269Z"
        fill="white"
      />
    </svg>
  );
};
