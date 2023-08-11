export interface IComment {
  username: string;
  text: string;
  date: string;
  avatar: string;
}

export interface IPostComment {
  text: string;
  userId: number;
  articleId: number;
}
