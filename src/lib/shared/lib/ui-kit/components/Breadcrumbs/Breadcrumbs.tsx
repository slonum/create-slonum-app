import { useRouter } from 'next/router';
import { SvgArrowReturn, SvgArrowReturnDocs } from '../svg';
import cl from 'classnames';
import styles from './Breadcrumbs.module.scss';
import { memo } from 'react';
import { MAIN } from '@slonum/kit';

export interface IBreadcrumb {
  title: string;
  link?: string;
  click?: () => void;
  isReturn?: boolean;
}

interface IBreadItem extends IBreadcrumb {
  ind: number;
}

export interface IBreadcrumbsProps {
  items: IBreadcrumb[];
  isLine?: boolean;
  className?: string;
  classNameItem?: string;
  isDoc?: boolean;
  isWords?: boolean;
  padding?: boolean;
  isAbsoluteLastWord?: boolean;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
  items: itemsIncoming,
  className,
  classNameItem,
  isLine,
  isWords,
  isDoc,
  padding,
  isAbsoluteLastWord,
}) => {
  const items: IBreadcrumb[] = [
    { title: 'Главная', link: MAIN },
    ...itemsIncoming,
  ];
  const router = useRouter();

  const BreadcrumbItem = ({
    title,
    link,
    isReturn,
    click,
    ind,
  }: IBreadItem) => {
    return (
      <li
        className={cl(classNameItem, styles.breadcrumbs__item, {
          [styles['breadcrumbs__item--line']]: isLine,
        })}
      >
        {isReturn ? (
          <button
            className={cl(styles['breadcrumbs__return-link'], {
              [styles['breadcrumbs__return-link--doc']]: isDoc,
            })}
            onClick={(e) => {
              if (link) {
                router.push(link);
              } else {
                router.back();
              }
            }}
          >
            {isDoc ? <SvgArrowReturnDocs /> : <SvgArrowReturn />}
            <span className={styles['breadcrumbs__return-title']}>{title}</span>
          </button>
        ) : ind !== items.length - 1 ? (
          <button
            className={cl(
              styles.breadcrumbs__link,
              ind === 0 && styles['breadcrumbs__first'],
            )}
            onClick={() => {
              if (link) router.push(link);
              else click && click();
            }}
          >
            <span>/</span>
            <span className={styles['breadcrumbs__link__title']}>{title}</span>
          </button>
        ) : (
          <div
            className={cl(
              styles.breadcrumbs__last,
              isAbsoluteLastWord && styles['breadcrumbs__last--absolute'],
            )}
          >
            <span>/</span>
            {title}
          </div>
        )}
      </li>
    );
  };

  return (
    <div
      className={cl(className, styles.breadcrumbs, {
        [styles['breadcrumbs--words']]: isWords,
        [styles['breadcrumbs--padding']]: padding,
      })}
    >
      <ul className={styles.breadcrumbs__list}>
        {items.map((item, ind) => (
          <BreadcrumbItem key={item.title} ind={ind} {...item} />
        ))}
      </ul>
    </div>
  );
};

const memoizedBreadCrumbs = memo(Breadcrumbs);

export { memoizedBreadCrumbs as Breadcrumbs };
