export interface IWordsList {
  id: number;
  name: string;
  userId: number;
}
type IStatusLearned = 'in_process' | 'studied' | null;

export interface IEnglishWord {
  id: number;
  count: number;
  ts?: string;
  word: string;
  global_rating?: number;
  user_files_rating?: number;
  percent?: any;
  translations?: string[];
  translation?: string;
  status: IStatusLearned;
}
export interface IAddWordToListResponse {
  id: string;
  lastShownAt: string;
  status: IStatusLearned;
  translation: string;
  userId: string;
  wordId: number;
  wordsList: any;
}
export interface IAddWordListPayload {
  name: string;
  childId?: number;
}
export interface IDeleteWordListPayload {
  id: number;
  childId?: number;
}
export interface IGetWordListPayload {
  childId?: number;
}
export interface IRenameWordListPayload {
  id: number;
  newName: string;
  childId?: number;
}
export interface IAddWordToListPayload {
  id: number;
  word: string;
  translation: string;
  childId?: number;
}
export interface IDeleteWordFromListPayload {
  id: number;
  enWordUserId: number;
  childId?: number;
}

export interface IWordsUserList extends IWordsList {
  wordsUser: IWordsUserItem[];
  progress: string;
}

export interface IWordsUserItem {
  id: number;
  lastShownAt: string;
  status: IStatusLearned;
  translation: string;
  userId: number;
  wordId: number;
  word: {
    canBePreposition: boolean;
    canBeVerb: boolean;
    count: string;
    id: string;
    isName: boolean;
    rating: string;
    ts: string;
    word: string;
  };
}

export interface IEnglWord extends IEnglishWord {
  wordUserId?: number;
  isNew?: boolean;
  translation?: string;
  wordId: number | string;
}

export interface IEnglList {
  title?: string;
  id: number;
  words: IEnglWord[];
  wordListId?: number;
}

export interface IEnglishTrainingStart {
  id: number;
  userId: number;
  startAt: string;
  finishAt: string;
  wordListId: number;
}

export interface IEnglishAnswerPayload {
  wordUserId: number;
  isCorrect: boolean;
  lessonId: number;
}

export interface ITrainEnglishResponse {
  notStudiedCount: number;
  studiedCount: 0;
  totalCount: 0;
  wordListId: string;
  wordListName: string;
  percentProgress: number;
}

export interface IEnglishWordList {
  id: number;
  name: string;
  progress: string;
  userId: string;
  wordsUser: IWordsUserItem[];
}

export interface IEnglishWordAdmin {
  id: number;
  word: string;
  ts: string;
  translations: string[];
  global_rating: number | null;
}

export interface IEnglishGEtWord {
  word: IEnglishWordAdmin;
}

export interface IEnglishGEtWordList {
  wordList: IEnglishWordAdmin[];
}

export interface IEnglishSentence {
  id: number;
  wordFormId: number;
  text: string;
  approved: boolean;
  originalSentenceId?: number;
}

export interface IEnglishSentenceRandom {
  wordFormId: number;
  wordForm: string;
  sentence: string;
  sentenceId: string;
}

export interface IEnglishCreateSentencePayload {
  wordFormId: number;
  sentence: string;
  sentenceId: number;
}

export interface IText {
  id: number;
  text: string;
  textHash: string;
  length: number;
  averageSentenceLength: number;
  averageSentenceWordsCount: number;
  uniqueWordsCount: number;
}
export enum WordStatus {
  IN_PROCESS = 'in_process',
  STUDIED = 'studied',
}

export interface IWordUser {
  userId: number;
  wordId: number;
  status: WordStatus;
  lastShownAt: string;
}
interface IEnglishWordTranslation {
  id: string;
  pos: string;
  translation: string;
  wordId: string;
  wordFormId: any;
}
export type IEnglishWordTranslations = IEnglishWordTranslation[];
