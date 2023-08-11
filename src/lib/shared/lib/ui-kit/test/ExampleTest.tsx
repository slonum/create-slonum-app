import { FC } from 'react';
import cl from 'classnames';
import styles from './ExampleTest.module.scss';
import Link from 'next/link';

interface IExampleTestProps {
  isNewSnap?: boolean;
  onClick?: () => void;
  onClickWithValues?: (value: string, subprop: { value: string }) => void;
}

export const ExampleTest: FC<IExampleTestProps> = ({
  isNewSnap,
  onClick,
  onClickWithValues,
}) => {
  return (
    <div className={styles.test}>
      {isNewSnap && <div>it is New Snap</div>}
      <button onClick={onClick}>buttonTtitle</button>
      <button
        onClick={() => onClickWithValues('test-value', { value: 'test' })}
        className={styles.test__buttonNoTtitle}
      >
        <span>buttonNoTtitle</span>
      </button>
      <Link href={'/test'}>link to page test</Link>
      <Link href={'https://example.com/'}>link to page example.com</Link>
    </div>
  );
};
