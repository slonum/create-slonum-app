import { IEnglishWord } from './english-words';

export interface IEnglishBook
  extends Record<
    string,
    | string
    | number
    | IEnglishWord[]
    | null
    | boolean
    | (() => void)
    | FormDataEntryValue
    | File
    | undefined
    | ((arg: number) => void)
    | IEnglishBookStats
  > {
  image: string;
  author: string;
  authorEng: string;
  title: string;
  titleEng: string;
  annotation: string;
  volume: number;
  textId?: number;
  id?: number;
  slug: string;
  wordsCount: number;
  status?: string | null;
  file?: File;
  complexity?: number;
  isAddedToStudy?: boolean;
  isRead?: boolean;
  releaseYear?: any;
  numberOfSeasons?: any;
  stats: IEnglishBookStats;
  wordList?: IEnglishWord[];
}

export interface IEnglishBookWithWordList extends IEnglishBook {
  wordList: IEnglishWord[];
}

export interface IEnglishBookStats {
  mostPopularWords: IEnglishWord[];
  sentencesWithWordsCountMoreThan5: { count: number; percent: number | null };
  wordsWithMoreThanOneCountInText: {
    count: number;
    percent: number | null;
    totalCount: number;
  };
  wordsWithOneCountInText: { count: number };
}
