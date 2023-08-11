import { FC } from 'react';
import { IUserInfoResponseSuccess } from '@slonum/kit';
import { EmptyAvatar } from './EmptyAvatar';

interface IUserAvatarProps {
  className?: string;
  user: IUserInfoResponseSuccess;
}

export const UserAvatar: FC<IUserAvatarProps> = ({ className, user }) => {
  const isParent = Array.isArray(user.children);
  return (
    <EmptyAvatar
      className={className}
      avatarLink={user.avatarLink}
      id={user.id}
      isParent={isParent}
    />
  );
};
