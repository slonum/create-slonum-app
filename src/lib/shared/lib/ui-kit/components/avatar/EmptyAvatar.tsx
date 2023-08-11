/* eslint-disable @next/next/no-img-element */
/* eslint-disable indent */
import { FC } from 'react';
import cl from 'classnames';
import styles from './Avatar.module.scss';
import { SERVICE_FILES } from '@slonum/kit';
import { getEmptyAvatar } from '@ui/utils/getChildAvatar';

interface IEmptyAvatarProps {
  className?: string;
  avatarLink?: string;
  isParent?: boolean;
  id?: number | string;
}

export const EmptyAvatar: FC<IEmptyAvatarProps> = ({
  className,
  avatarLink,
  isParent,
  id = 1,
}) => {
  return (
    <img
      className={cl(className, styles.empty)}
      src={getEmptyAvatar(avatarLink, isParent, id)}
      alt="avatar"
    />
  );
};
