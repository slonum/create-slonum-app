export interface IVocabularyAddWordPartVariant {
  vocabularyWordId: number;
  word: string;
  positionWordPartNumberFromZero: number;
  wordPartLength: number;
  variants: string[];
}

export interface IVocabularyDeleteWordPartVariant {
  vocabularyWordId: number;
  positionWordPartNumberFromZero: number;
  wordPartLength: number;
}
