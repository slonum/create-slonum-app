export interface IVocabularyWordPart {
  id: number;
  vocabularyWordId: number;
  positionNumberFromZero: number;
  wordPartLength: number;
}

export interface IVocabularyWordPartWithVariants {
  positionNumberFromZero: number;
  wordPartLength: number;
  variants: string[];
}
