/* eslint-disable @next/next/no-img-element */
/* eslint-disable indent */
import { SERVICE_FILES } from '@slonum/kit';
import styles from './Avatar.module.scss';
import cl from 'classnames';

export interface IAvatarProps {
  className?: string;
  id: number;
  srcAvatar?: string;
  currentProfile: number;
  name?: string;
  isParent?: boolean;
  isNotDel?: boolean;
  isClose?: boolean;
  onClick?: () => void;
  switchProfile?: (data: { id: number; curId: number }) => void;
  setMOB?: () => void;
}

export const setProfile = (
  isActive: boolean,
  id: number,
  currentProfile: number,
  switchProfile: (data: { id: number; curId: number }) => void,
) => {
  if (isActive) return;
  if (switchProfile) switchProfile({ id, curId: currentProfile });
};

export const ChildAvatar: React.FC<IAvatarProps> = ({
  className,
  srcAvatar,
  id,
  name,
  currentProfile,
  isParent,
  isNotDel,
  isClose,
  onClick,
  setMOB,
  switchProfile,
}) => {
  const isActive = currentProfile == id;
  return (
    <div
      className={cl(className, styles.avatar__child, {
        [styles.none]: isActive && !isNotDel,
      })}
    >
      <button
        className={cl(
          styles.avatar,
          styles['avatar--child'],
          isActive && styles['avatar--active'],
        )}
        onClick={() => {
          if (isClose) {
            if (setMOB) setMOB();
            setTimeout(() => {
              setProfile(isActive, id, currentProfile, switchProfile);
            }, 200);
          } else
            onClick
              ? onClick()
              : setProfile(isActive, id, currentProfile, switchProfile);
        }}
      >
        <img
          src={
            srcAvatar
              ? `${SERVICE_FILES}/static/${srcAvatar}`
              : isParent
              ? '/parent.svg'
              : `/child${typeof +id === 'number' && id ? (+id % 5) + 1 : 1}.svg`
          }
          alt="avatar"
        />
      </button>
      <p
        className={cl(
          styles.avatar__childname,
          isActive && styles['avatar__childname--active'],
        )}
      >
        {name}
      </p>
    </div>
  );
};
