export interface IDataInfo {
  title: string;
  subTitle?: string;
  list: IInfoItem[];
}

interface ISubList {
  text: string;
  subList: string[];
  type?: 'weight' | 'circle';
}

export type IInfoItem = string | ISubList;
