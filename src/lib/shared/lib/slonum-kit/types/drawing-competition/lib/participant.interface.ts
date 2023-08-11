import { ICompetition } from './competition.interface';

export interface IParticipant {
  userId: number;
  competitionId: number;
  competition?: ICompetition;
  repostLink?: string;
  drawingLink?: string;
  paymentTime?: Date;
  paymentId?: string;
  paymentAmount?: number;
  isChecked: boolean;
}
