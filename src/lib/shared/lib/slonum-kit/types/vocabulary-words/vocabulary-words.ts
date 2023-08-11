export interface ILessonPayload {
  childId?: number;
}
export interface IWords {
  id: number;
  wordWithSpace: string;
  fullWord: string;
  class: number;
  description?: string;
  context?: string;
  word: string;
}
export interface IWordDescription {
  id: number;
  description: string;
}
export interface IWordDefinition {
  id: number;
  definition: string;
}
