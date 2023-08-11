import { FCL } from '@slonum/kit';
import cl from 'classnames';
import styles from './Typography.module.scss';

type ISize = 'normal' | 'small';

interface IParagraphProps {
  size?: ISize;
  isSpan?: boolean;
  preWrap?: boolean;
  isAccent?: boolean;
}

export const P: FCL<IParagraphProps> = ({
  children,
  className,
  size = 'normal',
  isSpan,
  preWrap,
  isAccent,
}) => {
  const classSplitName = cl(className, styles.p, styles['p--' + size], {
    [styles['p--preWrap']]: preWrap,
    [styles['p--accent']]: isAccent,
  });

  if (isSpan) {
    return <span className={classSplitName}>{children}</span>;
  }
  return <p className={classSplitName}>{children}</p>;
};
