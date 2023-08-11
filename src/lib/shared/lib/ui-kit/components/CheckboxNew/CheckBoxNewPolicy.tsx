import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { MAIN } from '@slonum/kit';

export const CheckBoxNewPolicy: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {!children ? 'Отправляя данные, я соглашаюсь с ' : children}
      <Link href={MAIN + '/terms/policy'}>Политикой обработки данных</Link>
    </>
  );
};
