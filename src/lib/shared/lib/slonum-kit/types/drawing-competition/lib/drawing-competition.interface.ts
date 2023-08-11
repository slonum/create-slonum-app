import { IParticipant } from './participant.interface';
import { IAuthTokens } from '../../common/auth.interface';
import {
  IUserInfo,
  IUserInfoRegisterPayload,
} from '../../common/user-info.interface';

export type IRegisterInCompetition = Omit<
  IUserInfoRegisterPayload,
  'passwordConfirm' | 'registrationSource'
>;

export type ICompetitionRegisterResponseSuccess = IAuthTokens;
export type ICompetitionParticipantInfoResponse = IParticipant;

export type ICheckAndUpdateUserResponseSuccess = IUserInfo;

export interface IAddRepostLinkPayload {
  competitionId: number;
  repostLink: string;
  childId: number;
}

export interface IAddDrawingLinkPayload {
  drawingLink: string;
  childId: number;
  competitionId: number;
}

export interface IGetParticipantPayload {
  childId: number;
  id: number;
}

export interface IGetParticipantPayloadAll {
  childId: number;
}

export interface ICompetitionAddParticipantPayload {
  childId: number;
  competitionId: number;
}

export interface ICheckAndUpdateUserPayload
  extends Required<
    Pick<IUserInfo, 'email' | 'fullName' | 'city' | 'birthDate'>
  > {
  competitionId: number;
  childId: number;
}

export interface IAddParticipantStatePayload {
  id: string | number;
  data: IParticipant[];
}

export interface ISetParticipanRankPayload {
  userId: number;
  competitionId: number;
  rank: number | null;
}
