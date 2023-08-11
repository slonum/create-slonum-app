export interface IVocabularyWordStudy {
  userId: number;
  vocabularyWordId: number;
  rightAnswersInRow: number;
  nextRepeatTime?: string;
  lastShownAt?: string;
}
