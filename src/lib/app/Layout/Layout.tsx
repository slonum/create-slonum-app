import { Footer } from '@ui/blocks/Footer';
import { Header } from '@ui/blocks/head';
import { useAuthUser } from '@ui/hooks/useAuthUser';
import { useAppSelector } from '@ui/redux';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const auth = useAppSelector((state) => state.auth.tokens);
  useAuthUser(!!auth);
  const router = useRouter();
  const isNavHome = router?.pathname === '/';
  return (
    <>
      <div className="content">
        <Header isAuth={!!auth} isNoneBorder />
        {children}
      </div>
      <Footer />
    </>
  );
};
