import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '@components/molecules/NavBar';
import Footer from '@components/molecules/Footer';

export interface RootLayoutProps {
  withNavBar: boolean;
  withFooter: boolean;
}

const RootLayout: FC<RootLayoutProps> = ({ withNavBar, withFooter }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bgYellow to-bgPurple">
      {withNavBar && <NavBar />}
      <div className="flex-1">
        <Outlet />
      </div>
      {withFooter && <Footer />}
    </div>
  );
};

export default RootLayout;
