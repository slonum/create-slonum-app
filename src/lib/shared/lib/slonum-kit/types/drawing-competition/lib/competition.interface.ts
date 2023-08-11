export interface ICompetition {
  id: number;
  title: string;
  price: number;
  priceWithRepost: number;
  description: string;
  endingTime?: string;
  currentTime: Date | string;
  isFinished: boolean;
  postLinks: {
    vk: string;
    ok: string;
  };
}
export interface IEditCompetition {
  id: number;
  title: string;
  price: number;
  priceWithRepost: number;
  description: string;
  endingTime?: Date | string;
  postLinks: {
    vk: string;
    ok: string;
  };
}
