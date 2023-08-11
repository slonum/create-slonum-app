import { BannerStatus } from './banner-status.enum';
import { BannerType } from './banner-type.enum';

export interface IBanner {
  name: string;
  type: BannerType;
  title?: string;
  text: string;
  buttonText: string;
  url: string;
  img: string;
  product: string;
  backgroundColor: string;
  buttonColor: string;
  textBannerColor: string;
  textButtonColor: string;
  status: BannerStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
