import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@store/authStore';

import SeoComponent from '@components/atoms/SeoComponent';
import RegisterAdminSection from '@components/organisms/RegisterAdminSection';

import { LOGIN_PAGE } from '@constants/routes';

import styles from './index.module.css';

export interface RegisterAdminPageProps {}

const RegisterAdminPage: FC<RegisterAdminPageProps> = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate(LOGIN_PAGE);
    }
  }, [user, isAuthenticated, navigate]);

  return (
    <>
      <SeoComponent title="Register Admin" href="register-admin" />
      <div
        className={`${styles.registerAdminSection} px-4 tablet:px-10 desktop:px-20`}
      >
        <RegisterAdminSection />
      </div>
    </>
  );
};

export default RegisterAdminPage;
