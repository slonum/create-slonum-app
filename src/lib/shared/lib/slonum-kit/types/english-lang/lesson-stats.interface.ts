export interface IEnglishLessonStats {
  lessonId: number;
  class: number;
  startAt: string;
  finishAt: string;
  totalCount: number;
  correctCount: number;
  errorCount: number;
  errorList: IEnglishLessonErrorList[];
  correctionsCount: number;
}

export interface IEnglishLessonErrorList {
  answer: string;
  correct: string;
}

export interface ILessonEnStats {
  lessonId: number;
  startAt: string;
  finishAt: string;
  totalCount: number;
  correctCount: number;
  errorCount: number;
  errorList: ILessonEnErrorList[];
  correctionsCount: number;
  answerList: ILessonAnswerList[];
  wordListId: string;
}

export interface ILessonEnErrorList {
  translation: string;
  word: string;
  wordUserId: string;
}

export interface ILessonAnswerList {
  answer: null | string;
  answerType: 'i-know' | 'write-word';
  isCorrect: boolean;
  progress: number;
  translation: string | null;
  word: string;
}
