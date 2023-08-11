import LinkComponent from 'next/link';
import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Typography.module.scss';
import { P } from './P';

export const Link: FCL<{ to: string }> = ({ children, className, to }) => {
  return (
    <LinkComponent href={to} className={cl(className, styles.link)}>
      <P isSpan>{children}</P>
    </LinkComponent>
  );
};
