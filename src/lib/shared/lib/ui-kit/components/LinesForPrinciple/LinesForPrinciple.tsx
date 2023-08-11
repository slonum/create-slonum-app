import cl from 'classnames';
import styles from './LinesForPrinciple.module.scss';

export const LinesForPrinciple = () => {
  return (
    <div className={styles.lines}>
      <div className={cl(styles.lines__line, styles['lines__line-left'])} />
      <div className={cl(styles.lines__line, styles['lines__line-right'])} />
    </div>
  );
};
