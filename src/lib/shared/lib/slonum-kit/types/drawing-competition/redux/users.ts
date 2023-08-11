import { IRole } from '../../common/roles.interface';
import { IUser } from '../../common/user.interface';

export interface IUserJWTToken {
  id: string;
  exp: number;
  iat: number;
  roles: IRole[];
}

export interface IAddAvatarPayload {
  fileLink: string;
  id?: number;
}

export interface IUserDeleteResponseSucess {
  id: number;
  email: string;
}
export type IUserResponseSuccess = IUser;
