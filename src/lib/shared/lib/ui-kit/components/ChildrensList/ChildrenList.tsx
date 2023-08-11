import { useAppSelector } from '@ui/redux';
import { ChildAvatar } from '../avatar';
import { H2 } from '../titles';
import cl from 'classnames';
import styles from './ChildrenList.module.scss';

interface IChildrenList {
  onClick: (id: number) => void;
  isMenu?: boolean;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export const ChildrenList: React.FC<IChildrenList> = ({
  onClick,
  children,
  className,
  title = 'Кто проходит задание ?', //'Выберите ребенка'
}) => {
  const { profile } = useAppSelector((state) => state.user);
  const child = profile?.children;

  return (
    <div className={cl(className, styles.children)}>
      <H2 className={styles.children__title}>{title}</H2>
      <ul className={styles.children__list}>
        {child?.map((c) => (
          <ChildAvatar
            isNotDel
            srcAvatar={c.avatarLink}
            key={c.id}
            name={c.firstName}
            id={c.id}
            currentProfile={0}
            onClick={() => onClick(c.id)}
          />
        ))}
      </ul>
      {children}
    </div>
  );
};
