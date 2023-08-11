export interface ITrainingStatisticBlockProps {
  errorCount: number;
  studyingCount: number;
  totalCount: number;
  grade?: number;
  type?: 'en' | 'voc';
  percentProgress?: number;
}
