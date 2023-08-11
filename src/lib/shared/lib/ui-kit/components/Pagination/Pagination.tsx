/* eslint-disable indent */
import { FC, useEffect, useState } from 'react';
import cl from 'classnames';
import styles from './Pagination.module.scss';
import { usePagination } from './usePagination';
import { ChevronRight } from '../svg';

interface IPaginationProps {
  data: any[];
  setFilteredData: (v: any) => void;
  count: number;
  maxButton?: number;
  className?: string;
  countsData?: { id: number; value: number }[];
}

export const Pagination: FC<IPaginationProps> = ({
  data,
  setFilteredData,
  count,
  className,
  countsData,
}) => {
  const [editCount, setCount] = useState<number>(count);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
    dots,
  } = usePagination(editCount, data.length);

  useEffect(() => {
    if (!data.length) return;
    const pg = data.slice(firstContentIndex, lastContentIndex);
    setFilteredData(pg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstContentIndex, lastContentIndex, data]);

  if (totalPages === 0 || count >= data.length) return null;

  return (
    <div className={cl(className, styles.flex, styles.pagination)}>
      <p className={styles.pagination__info}>
        Showing {page} - {editCount} out of {data.length}
      </p>
      <div className={cl(styles.flex, styles.pagination__buttons)}>
        <button
          className={cl(styles.pagination__dot, {
            [styles.pagination__hidden]: 1 === page,
          })}
          onClick={prevPage}
        >
          <ChevronRight className={styles.pagination__icon} />
        </button>

        {dots.map((dot, ind) => {
          if (dot === '...')
            return (
              <div key={dot + ind} className={cl(styles.pagination__dot)}>
                ...
              </div>
            );
          return (
            <button
              onClick={() => setPage(+dot)}
              key={+dot + ind}
              className={cl(styles.pagination__dot, {
                [styles['pagination__dot--active']]: page === dot,
              })}
            >
              {dot}
            </button>
          );
        })}

        <button
          className={cl(styles.pagination__dot, {
            [styles.pagination__hidden]: totalPages === page,
          })}
          onClick={nextPage}
        >
          <ChevronRight />
        </button>
      </div>
      {/* {countsData && (
        <div className={cl(styles.flex, styles.pagination__counts)}>
          <p className={styles.pagination__info}>Show rows</p>
            <DropMenu
            type="input"
            data={countsData}
            select={countsData.find((it) => it.value === editCount)}
            selected={(value) => {
              setCount(+value.value);
            }}
            className={styles.pagination__dropdown}
            classNameDrop={styles.pagination__drop}
            required
          />  
        </div>
      )} */}
      <div></div>
    </div>
  );
};
