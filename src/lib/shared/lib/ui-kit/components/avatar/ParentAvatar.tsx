/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { IUserInfoResponseSuccess } from '@slonum/kit';
import { IUserProfile } from '@ui/types';
import { getLoggedProfileAvatar } from '@ui/utils/getChildAvatar';
import cl from 'classnames';
import styles from './Avatar.module.scss';
import { screenLg } from '@ui/constants';

interface IParentAvatar {
  module?: 'page' | 'cabinet';
  isTest?: boolean;
  loggedUser?: IUserInfoResponseSuccess;
  activeProfile?: IUserProfile;
  switchProfile?: (data: { id: number; curId: number }) => void;
}

export const ParentAvatar: FC<IParentAvatar> = ({
  module = 'page',
  isTest,
  loggedUser,
  activeProfile,
  switchProfile,
}) => {
  const isMobile = document.documentElement.clientWidth < screenLg;
  const srcAvatar =
    !isMobile || module === 'page'
      ? loggedUser?.avatarLink
      : activeProfile?.avatarLink;

  const isParent = activeProfile?.role === 'PARENT';
  const isActive =
    activeProfile?.role === 'PARENT' || activeProfile?.role === 'USER';

  const setProfile = () => {
    if (isActive || isParent || module === 'page') return;
    if (switchProfile)
      switchProfile({ id: loggedUser!.id, curId: activeProfile?.id });
  };

  const src = getLoggedProfileAvatar(
    srcAvatar,
    isActive,
    isMobile,
    isTest,
    activeProfile?.id,
  );

  return (
    <button
      className={cl(styles.avatar, styles['avatar--' + module], {
        [styles['avatar--parent']]: module === 'cabinet',
        [styles['avatar--active']]: isActive,
        [styles['avatar--noparent']]: isActive,
        [styles['avatar--noeffect']]: module === 'page',
      })}
      onClick={setProfile}
    >
      <img src={src} alt="avatar" />
    </button>
  );
};
