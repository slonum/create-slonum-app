export interface IGetUserStatsForListResponse {
  listId: number;
  totalCount: number;
  studiedCount: number;
  notStudiedCount: number;
}

export interface IGetUserWordForEnglishListResponse {
  wordUserId: string;
  word: string;
  translation: string;
}
