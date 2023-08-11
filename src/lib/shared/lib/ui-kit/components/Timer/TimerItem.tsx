import styles from './Timer.module.scss';

interface ITimerItemProps {
  value: string | number;
  caption: string;
  children?: React.ReactNode;
}

export const TimerItem: React.FC<ITimerItemProps> = ({
  caption,
  children,
  value,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__value}>{value}</div>
      <div className={styles.item__caption}>
        {caption}
        {children && <span>{children}</span>}
      </div>
    </div>
  );
};
