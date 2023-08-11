import { FC } from 'react';
import { IFaq } from '@slonum/kit';
import styles from './Collapse.module.scss';
import cl from 'classnames';

interface ICollapseProps {
  faq: IFaq;
  id: number;
  isAbout?: boolean;
}

export const Collapse: FC<ICollapseProps> = ({ faq, id, isAbout }) => {
  return (
    <div className={styles.collapse}>
      <input
        type="checkbox"
        id={`collapse-${id}`}
        className={styles.collapse__checkbox}
      />
      <label htmlFor={`collapse-${id}`} className={styles.collapse__header}>
        <p
          dangerouslySetInnerHTML={{ __html: faq.question }}
          className={cl(
            styles.collapse__question,
            isAbout && styles['collapse__question--bold'],
          )}
        />
        <div className={styles.collapse__button}>
          <div className={styles.verticalLine} />
          <div className={styles.horizontalLine} />
        </div>
      </label>
      <div className={styles.collapse__content}>
        <p className={styles.collapse__answer}>{faq.answer}</p>
      </div>
    </div>
  );
};
