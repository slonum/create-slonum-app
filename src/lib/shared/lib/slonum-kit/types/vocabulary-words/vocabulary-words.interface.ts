import { IVocabularyWordAnswer } from './vocabulary-word-answer.interface';
import { IVocabularyWordPartWithVariants } from './vocabulary-word-part.interface';
import { IVocabularyWordWithPart } from './vocabulary-word-with-part.interface';

export type ListOFWords = string[];
export interface IListOFWordsProps {
  wordsArr: WordsArr[];
}
export interface WordsArr {
  grade: number;
  data: ListOFWords;
}

export interface IWordsObj {
  title: string;
  data: ListOFWords;
}

export interface IVocabularyFindWordForStudyResponse
  extends IVocabularyWordWithPart {
  wordWithSpace: string;
  fullWord: string;
  wordParts: IVocabularyWordPartWithVariants[];
}
export interface IVocabularyWordsCount {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  total: number;
}

export interface IVocabularySaveWordAnswerRequest {
  childId?: number;
  answer: string;
  vocabularyWordId: number;
  lessonId: number;
}

export interface IVocabularySaveWordAnswerAnauthPayload {
  childId: number;
  answerList: IVocabularyAswerItem[];
  cls: number;
}

export interface IVocabularyAswerItem {
  answer: string;
  vocabularyWordId: number;
}

export type IVocabularySaveWordAnswerResponse = IVocabularyWordAnswer;

export interface IGetUserStatsForClassResponse {
  class: number;
  totalCount: number;
  studiedCount: number;
  notStudiedCount: number;
  percentProgress: number;
}

export interface IGetUserStatsResponse {
  errorCount: number;
  totalCount: number;
  studyingCount: number;
}

export interface IGetCountWordsResponse {
  [cls: string | number]: number;
}
