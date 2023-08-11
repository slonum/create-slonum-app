import { FC } from 'react';
import { IGetUserStatsForClassResponse as IGrade } from '@slonum/kit';
import { DropDownList, IDropDownItem } from '../DropDownList';
import cl from 'classnames';
import styles from './TrainingDropList.module.scss';

interface ITrainingDropList {
  grade: number;
  grades: any; // { [id: number]: IGrade };
  className?: string;
  inactive: number[];
  trainingHandler: (next: number) => void;
  setGradeFilter?: (next: number) => void;
}

export const TrainingDropList: FC<ITrainingDropList> = ({
  grade,
  grades,
  className,
  inactive,
  trainingHandler,
  setGradeFilter,
}) => {
  const TrainingDropItem: FC<IGrade> = ({
    totalCount,
    class: grade,
    studiedCount,
  }) => {
    const percent = Math.round((studiedCount * 100) / totalCount);
    return (
      <div className={styles.droplist__item}>
        <span>{grade === 10 ? '10-11 класс' : grade + ' класс'}</span>
        <div className={styles.droplist__progressbar}>
          <div
            className={styles.droplist__progressline}
            style={{ width: percent + '%' }}
          />
        </div>
      </div>
    );
  };

  const list: IDropDownItem[] = [];
  const emptyList = [];
  for (const key in grades) {
    const grade = grades[key];
    list.push({
      title: grade.class === 10 ? '10-11' : grade.class + ' класс',
      sub: <TrainingDropItem key={grade.class} {...grade} />,
    });
    emptyList.push(grade);
  }

  return window.outerWidth < 992 ? (
    <DropDownList
      className={cl(className, styles.droplist)}
      defaultValue={`Выбран ${grade === 10 ? '10-11' : grade} класс`}
      list={list}
      placeholder="Выбор класса"
      stylePar={styles}
      onClick={({ index, value }) => {
        if (setGradeFilter) setGradeFilter(index);
        trainingHandler(grade);
      }}
    />
  ) : (
    <div className={cl(className, styles.progresslist)}>
      <ul className={styles.progresslist__list}>
        {emptyList.map(({ totalCount, class: grade, studiedCount }, index) => {
          const percent = Math.round((studiedCount * 100) / totalCount);
          return (
            <button
              key={grade}
              className={styles.progresslist__item}
              onClick={() => trainingHandler(grade)}
              disabled={inactive && inactive.includes(grade)}
            >
              <span className={styles.progresslist__grade}>
                {grade == 10 ? '10-11' : grade}
              </span>
              <div
                className={styles.progresslist__progressline}
                style={{ height: percent + '%' }}
              />
            </button>
          );
        })}
      </ul>
    </div>
  );
};
