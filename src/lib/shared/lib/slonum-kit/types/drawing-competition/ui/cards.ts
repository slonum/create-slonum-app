export type IProgressType = 'light-green' | 'light-blue' | 'violet';
export type ICardBlockType = 'slider' | 'grid' | 'column';

export interface ITaskCard {
  title?: string;
  caption?: string;
  progressPercent: number;
  link?: string;
  linkTitle?: string;
  progressType?: IProgressType;
  id?: string;
  userId?: string | number;
}
