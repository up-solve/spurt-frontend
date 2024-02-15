import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '@store/authStore';

import SeoComponent from '@components/atoms/SeoComponent';
import LoginSection from '@components/organisms/LoginSection';

import { HOME_PAGE } from '@constants/routes';

import styles from './index.module.css';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  return (
    <>
      {isAuthenticated && user && <Navigate to={HOME_PAGE} />}
      <SeoComponent title="Login" href="login" />
      <div className={`${styles.formSection} px-2 desktop:pt-3`}>
        <LoginSection />
      </div>
    </>
  );
};

export default LoginPage;
