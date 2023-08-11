import { IEnglishWord } from './english-words';

export interface IEnglishTop {
  wordsList: IEnglishWord[];
  isAddedToStudy: boolean;
  isStudied: boolean;
}
