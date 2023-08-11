export interface IVocabularyWord {
  id: number;
  word: string;
  class: number;
  description?: string;
  context?: string;
  wordParts?: any[];
}
