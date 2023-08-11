import { IArticleShortInfo } from './article-short-info.interface';
import { ITopic } from './topic.interface';

export interface IArticle extends IArticleShortInfo {
  pageMarkup: string;
  topic: ITopic;
  tags: string[];
  test: string;
  cover: string;
  relatedTrainers: string[];
  relatedArticlesIds: number[];
  relatedArticles: object[];

  expectedPublishAt: Date;
  createAt: Date;
  publishAt: Date;
  updateAt: Date;
}
