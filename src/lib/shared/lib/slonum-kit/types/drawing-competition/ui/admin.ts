export interface IUserTable {
  rank: null | number;
  fullName: string;
  parentEmail: string;
  birthDate: {
    year: number;
    category: number;
  };
  city: string;
  payment: 'Оплачено' | 'Не оплачено';
  drawingLink: string | null;
  userId: number;
}
