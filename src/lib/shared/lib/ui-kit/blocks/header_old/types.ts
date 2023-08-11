import { IActionButtonProps } from '@ui/components/action-buttons';

export interface IHeaderProps {
  isAuth: boolean;
  isAdminBlogNavbar?: boolean;
  type: 'main' | 'draw';
  navbar?: 'main' | 'adminBlog';
  logoLink?: string;
  children?: React.ReactNode;
  bottomMenu?: {
    left: IActionButtonProps;
    right: IActionButtonProps;
  };
}
