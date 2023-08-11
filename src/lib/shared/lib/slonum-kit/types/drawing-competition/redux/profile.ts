import { IUserInfoAvatarLink } from '../../common/user-info.interface';

export interface INotificationProfile {
  id: string;
  message: string;
  link?: string;
  userId?: string | number;
  type: 'competition' | 'none';
}

export interface IUserProfile extends Partial<IUserInfoAvatarLink> {
  // id: number;
  role?: 'parent-active' | 'child-noparent' | 'child';
}
