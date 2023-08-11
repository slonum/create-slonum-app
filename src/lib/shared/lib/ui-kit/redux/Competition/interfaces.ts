import { PayloadAction } from '@reduxjs/toolkit';
import {
  IAddParticipantStatePayload,
  ICompetition,
  IParticipant,
} from '@slonum/kit';

export interface IParticipantInfoState extends IParticipant {
  percent: number;
}

export interface ICompetitionState {
  currentCompetition: ICompetition;
  participantInfo?: IParticipantInfoState;
  participants?: {
    [part: string]: IParticipant[];
  };
}

export type ISetCompetitionAction = PayloadAction<ICompetition>;
export type ISetParticipantAction = PayloadAction<IParticipantInfoState>;
export type IAddParticipantAction = PayloadAction<IAddParticipantStatePayload>;
