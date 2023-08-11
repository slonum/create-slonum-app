import { Button } from '@ui/components/Button';
import { FCL, useNavigate } from '@slonum/kit';

interface ITakePartButtonProps {
  link?: string;
  title: string;
}

export const TakePartButton: FCL<ITakePartButtonProps> = ({
  className,
  link,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <Button
      className={className}
      onClick={() => {
        navigate(link);
      }}
    >
      {title}
    </Button>
  );
};
