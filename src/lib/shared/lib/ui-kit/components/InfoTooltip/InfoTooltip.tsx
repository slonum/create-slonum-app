import { FC } from 'react';
import cl from 'classnames';
import styles from './InfoTooltip.module.scss';

interface IInfoTooltip {
  className?: string;
  classNameAnnotation?: string;
  classNameAnnotationText?: string;
  children: React.ReactNode;
  isNotText?: boolean;
  direction?: 'tl' | 'tr' | 'bl' | 'br' | 'r';
}

export const InfoTooltip: FC<IInfoTooltip> = ({
  children,
  className,
  isNotText,
  direction = 'tl',
  classNameAnnotation,
  classNameAnnotationText,
}) => {
  return (
    <span className={cl(className, styles.tooltip)}>
      <span
        className={cl(
          classNameAnnotation,
          styles.tooltip__annotation,
          styles['tooltip--' + direction],
          {
            [styles.tooltip__default]: !isNotText,
          },
        )}
      >
        {!isNotText && (
          <span
            className={cl(
              classNameAnnotationText,
              styles.tooltip__annotationText,
            )}
          >
            {children}
          </span>
        )}
        {isNotText && children}
      </span>

      <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 22C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2C5.47715 2 1 6.47715 1 12C1 17.5228 5.47715 22 11 22Z"
          stroke="#9FA0A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 8V12"
          stroke="#9FA0A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 16H11.01"
          stroke="#9FA0A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
