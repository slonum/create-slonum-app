import { IVocabularyWordPartWithVariants } from './vocabulary-word-part.interface';

export interface IVocabularyWordWithPart {
  wordParts: undefined | IVocabularyWordPartWithVariants[];
  id: number;
  word: string;
  class: number;
  description?: string;
  fullWord: string;
  context?: string;
  wordWithSpace: string;
}
