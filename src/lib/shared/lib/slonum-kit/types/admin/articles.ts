export interface IArticleStatus {
  status: 'draft' | 'deferred' | 'published' | 'deleted' | string;
}

export type BaseArticleSortType =
  | 'createTimeASC'
  | 'createTimeDESC'
  | 'likeAmountASC'
  | 'likeAmountDESC'
  | 'commentAmountASC'
  | 'commentAmountDESC'
  | string;
export type ArticleSortType =
  | BaseArticleSortType
  | 'articleTitleASC'
  | 'topicTitleASC'
  | 'articleTitleDESC'
  | 'topicTitleDESC';

export interface IArticlesSortBy {
  sortBy: ArticleSortType | string;
  status: IArticleStatus | string;
}

export interface ICreateArticlesTopic {
  title: string;
}

export interface IEditArticlesTopics {
  id: number;
  title: string;
}

export interface ITopicById {
  id: number;
  sortBy: ArticleSortType;
  status: IArticleStatus;
}

export interface ICreateArticle {
  id?: number;
  title: string;
  pageMarkup: string;
  topicId: number;
  tags: string[];
  test: string;
  expectedPublishAt: string;
  cover: string;
  relatedTrainers: string[];
  relatedArticlesIds: number[];
}

export interface IChangeStatusArticle {
  id: number;
  title: string;
  pageMarkup: string;
  topicId: number;
  topic: IEditArticlesTopics;
  tags: string[];
  tagsList: string[];
  test: string;
  status: IArticleStatus;
  isVisible: boolean;
  isDeleted: boolean;
  expectedPublishAt: string;
  publishAt: string;
  createAt: string;
  updateAt: string;
  likeAmount: number;
  commentAmount: number;
  cover: string;
  relatedTrainers?: string[];
  relatedArticlesIds: number[];
}

export interface ICreatedArticle extends IChangeStatusArticle {
  relatedTrainers?: RelatedTrainersType;
  relatedArticles?: RelatedArticlesType[];
}

export type RelatedArticlesType = {
  title: string;
  id: number;
  topic: string;
};

export type RelatedTrainersType = ('words' | 'english' | 'draw')[] | undefined;

export interface IRelatedArticles {
  articleId: number;
  relatedArticlesIds: number[];
}
