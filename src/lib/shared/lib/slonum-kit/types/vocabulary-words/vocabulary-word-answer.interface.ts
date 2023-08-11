export interface IVocabularyWordAnswer {
  id: number;
  vocabularyWordId: number;
  userId: number;
  answer: string;
  isCorrect: boolean;
  createdAt: string;
  lessonId: number;
}
