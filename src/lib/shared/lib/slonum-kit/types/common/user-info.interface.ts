import { IAuthTokens } from './auth.interface';

export interface IUserInfo {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  login?: string;
  city?: string;
  birthDate?: string;
  parentId?: number;
  children?: IUserInfo[] | undefined;
  password?: string;
  avatarLink?: string;
}

export interface IUserInfoParent extends IUserInfo {
  children?: IUserInfo[];
}

export type IUserInfoPayload = Required<
  Pick<IUserInfo, 'id' | 'email' | 'fullName' | 'city' | 'birthDate'>
>;

export type IUserInfoUpdateUserPayload = Required<
  Pick<IUserInfo, 'email' | 'fullName' | 'city' | 'birthDate' | 'id'>
>;

export type IUserInfoChildPayload = {
  childFullName?: string;
  city?: string;
  birthDate?: string;
};

export interface IUserInfoRegisterPayload {
  parentEmail?: string;
  parentFullName?: string;
  passwordConfirm?: string;
  password?: string;
  registrationSource: string;
  city?: string;
  childDto?: {
    childFullName?: string;
    birthDate?: string;
    city?: string;
  };
}
//export interface IUserInfoAddParticipantForCompetition {
//  fullName?: string;
//  email?: string;
//  passwordConfirm?: string;
//  password?: string;
//  birthDate?: string;
//  city?: string;
//  registrationSource: string;
//}

export interface IUserInfoAvatarLink extends IUserInfo {
  avatarLink: string;
}

export interface IAddChildResponse {
  login: string;
  password: string;
  childId: number;
}

export interface IUserInfoResponseSuccess extends IUserInfoAvatarLink {
  children: IUserInfoAvatarLink[] | undefined;
}
export type IUserInfoRegisterResponseSuccess = IUserInfo;
export type IUserInfoRegisterAndLoginResponseSuccess = {
  tokens: IAuthTokens;
  userId: number;
  childLoginDto: {
    login: string;
    password: string;
    childId: number;
  };
};

export interface IUserInfoByAdmin {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  city: string;
  birthDate: string;
  password: string;
  parentId: number;
  avatarLink: string;
  createdAt: string;
}
export interface IGetUsersByAdmin {
  length: number;
  users: IUserInfoByAdmin[];
}
