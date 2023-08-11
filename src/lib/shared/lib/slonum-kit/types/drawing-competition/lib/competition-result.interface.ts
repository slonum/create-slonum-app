import { IParticipant } from './participant.interface';

export interface ICompetitionResult {
  competitionId: string;
  participants: ICompetitionPartipicantResult[];
}

export interface ICompetitionPartipicantResult {
  userId: number;
  firstName: string;
  lastName: string;
  parentEmail: string;
  birthDate: string | number;
  city: string;
  drawingLink: string;
  rank: number | null;
  paymentAmount: number | null;
}

export interface IPartipicantAndRank extends IParticipant {
  rank: number | null;
}
