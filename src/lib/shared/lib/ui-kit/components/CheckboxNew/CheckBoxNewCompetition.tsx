import { MAIN } from '@slonum/kit';
import Link from 'next/link';

export const CheckBoxNewCompetition = () => {
  return (
    <>
      Отправляя данные, я соглашаюсь с{' '}
      <Link href={MAIN + '/terms/use'}>Условиями конкурса</Link>
    </>
  );
};
