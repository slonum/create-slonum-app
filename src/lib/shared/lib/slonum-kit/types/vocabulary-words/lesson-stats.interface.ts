export interface IWordsLessonStats {
  lessonId: number;
  class: number;
  startAt: string;
  finishAt: string;
  totalCount: number;
  correctCount: number;
  errorCount: number;
  errorList: IWordsLessonErrorList[];
  correctionsCount: number;
  answerList: any[];
}

export interface IWordsLessonErrorList {
  answer: string;
  correct: string;
  errorParts: {
    id: number;
    answerId: number;
    index: number;
    length: number;
  }[];
}
