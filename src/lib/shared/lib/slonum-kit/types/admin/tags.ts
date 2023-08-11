export interface ITagListInArticle {
  articleId: number;
  tags: string[];
}

export interface ITagInArticle {
  tag: string;
  articleId: number;
}

export interface ITag {
  tag: string;
}
