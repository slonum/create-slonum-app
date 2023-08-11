export interface IBannerDto {
  id?: number;
  name: string;
  type: 'BigBanner' | 'RectangularBanner' | string;
  product: string;
  title?: string;
  text: string;
  buttonText: string;
  url: string;
  img: string;
  backgroundColor: string;
  buttonColor: string;
  textBannerColor: string;
  textButtonColor: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface IBannerBlogDto {
  id?: number;
  url: string;
  img: string;
}
