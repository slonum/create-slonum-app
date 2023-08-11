import { IArticleShortInfo } from './article-short-info.interface';

export interface ITopic {
  id: number;
  title: string;
  articleList: IArticleShortInfo;
}
