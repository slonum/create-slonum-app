import { FC } from 'react';
import { Button } from '../Button';
import { TakePartButton } from './TakePartButton';
import { AuthButton } from './AuthButton';

export interface IActionButtonProps {
  title: string;
  type: 'click' | 'auth' | 'to-take';
  style?: '';
  onClick?: () => void;
  takeId?: string;
  isAuth?: boolean;
}

export const ActionButton: FC<IActionButtonProps> = ({
  title,
  type,
  onClick,
  style,
  takeId,
  isAuth,
}) => {
  return (
    <>
      {type === 'click' && <Button onClick={onClick}>{title}</Button>}
      {type === 'to-take' && (
        <TakePartButton title={title} link={`/#${takeId}`} />
      )}
      {type === 'auth' && <AuthButton isAuth={isAuth} />}
    </>
  );
};
