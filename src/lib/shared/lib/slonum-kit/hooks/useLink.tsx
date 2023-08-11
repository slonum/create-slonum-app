import Link from 'next/link';
import React from 'react';

interface INextLinkProps {
  to: string;
  children: string | React.ReactNode;
  className?: string;
  scroll?: boolean;
  isShallow?: boolean;
  onClick?: () => void;
  target?: string;
}

const NextLink = ({
  to,
  children,
  className,
  scroll = true,
  isShallow,
  onClick,
  target,
}: INextLinkProps) => {
  return (
    <Link
      href={to}
      scroll={scroll}
      shallow={isShallow}
      className={className}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const useLink = () => {
  return NextLink;
};
