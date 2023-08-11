import { FC, useEffect, useState } from 'react';
import { fetchGetUserStatsAllClass } from '@slonum/kit';
import { useAppSelector } from '@ui/redux';
import { TrainingDropList } from '@ui/components/TrainingDropList';
import { H2 } from '@ui/components/titles';
import { ChildrenList } from '@ui/components/ChildrensList';
import styles from './TrainingChooseChild.module.scss';

interface ITrainingChooseChildProps {
  trainingHandler: (cls: number, childId: number) => void;
}

export const TrainingChooseChild: FC<ITrainingChooseChildProps> = ({
  trainingHandler,
}) => {
  const [childId, setChildId] = useState<number>();
  const [gradesStats, setGradesStats] = useState<any>();
  const { profile } = useAppSelector((state) => state.user);

  const children = profile?.children;

  useEffect(() => {
    if (childId) {
      if (childId === -1) {
        const stat = {
          '1': { class: 1, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '2': { class: 2, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '3': { class: 3, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '4': { class: 4, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '5': { class: 5, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '6': { class: 6, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '7': { class: 7, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '8': { class: 8, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '9': { class: 9, totalCount: 0, studiedCount: 0, notStudiedCount: 0 },
          '10': {
            class: 10,
            totalCount: 0,
            studiedCount: 0,
            notStudiedCount: 0,
          },
        };
        setGradesStats(stat);
      } else {
        fetchGetUserStatsAllClass(childId).then((stat) => {
          setGradesStats(stat);
        });
      }
    } else {
      if (children && children.length === 1) setChildId(children[0].id);
      if (profile && (!children || profile.parentId)) setChildId(profile.id);
      if (children && children.length === 0) setChildId(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childId]);

  return (
    <div className={styles.choose}>
      {children && children.length > 1 ? (
        <ChildrenList className={styles.choose__list} onClick={setChildId} />
      ) : (
        <H2 className={styles.choose__title}>Выберите класс для изучения</H2>
      )}
      {gradesStats && childId && (
        <TrainingDropList
          inactive={[]}
          className={styles.choose__grades}
          grade={1}
          grades={gradesStats}
          trainingHandler={(cls: number) => trainingHandler(cls, childId)}
        />
      )}
    </div>
  );
};
