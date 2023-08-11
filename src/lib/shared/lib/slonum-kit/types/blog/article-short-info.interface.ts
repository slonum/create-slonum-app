import { ArticleStatus } from './article-status.enum';

export interface IArticleShortInfo {
  id: number;
  topicId: number;
  title: string;
  status: ArticleStatus;
  createAt: Date;
  likeAmount: number;
  commentAmount: number;
  readingTime: number;
  isVisible: boolean;
  isDeleted: boolean;
}
