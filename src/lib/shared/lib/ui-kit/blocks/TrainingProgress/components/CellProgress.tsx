import { FC } from 'react';
import { ScaleProgress } from './ScaleProgress';
import cl from 'classnames';
import styles from '../TrainingProgress.module.scss';

export const CellProgress: FC<{
  head?: string;
  subWord?: string | null;
  word?: string;
  answerCorrect?: {
    isCorrect: boolean;
    answer?: string;
    answerType: 'i-know' | 'write-word';
  };
  progress?: { value: number; answer?: boolean };
}> = ({ answerCorrect, head, progress, subWord, word }) => {
  return (
    <div className={styles.table__cell}>
      {!!head && <p className={styles.value__head}>{head}</p>}
      {!!word && <p className={styles.value__word}>{word}</p>}
      {!!subWord && <p className={styles.value__subWord}>{subWord}</p>}
      {answerCorrect !== undefined && (
        <p
          className={cl(styles.value__answer, {
            [styles['value__answer--true']]: answerCorrect.isCorrect,
          })}
        >
          {answerCorrect.answerType === 'i-know'
            ? answerCorrect.isCorrect
              ? 'Помню'
              : 'Не помню'
            : answerCorrect.answer}
        </p>
      )}
      {!!progress && (
        <ScaleProgress progress={progress.value} answer={progress.answer} />
      )}
    </div>
  );
};
