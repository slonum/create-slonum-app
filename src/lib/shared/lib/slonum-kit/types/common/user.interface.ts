export interface IUser {
  id: number;
  email: string;
  vkId: number;
  roles: any[];
  emailConfirmed: boolean;
  googleId: string;
  passwordHash?: string;
}
