import React from 'react';
import styles from './Footer.module.scss';

export const FooterUpButton: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.footer__up}>
      <p className={styles.footer__upText}>Наверх</p>
      <div className={styles.footer__upButtonWrapper}>
        <button
          aria-label="Наверх"
          className={styles.footer__upButton}
          onClick={scrollTop}
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L7 1L13 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
