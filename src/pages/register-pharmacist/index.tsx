import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@store/authStore';

import SeoComponent from '@components/atoms/SeoComponent';
import RegisterPharmacistSection from '@components/organisms/RegisterPharmacistSection';

import { LOGIN_PAGE } from '@constants/routes';

import styles from './index.module.css';

export interface RegisterPharmacistPageProps {}

const RegisterPharmacistPage: FC<RegisterPharmacistPageProps> = () => {
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
      <SeoComponent title="Register Pharmacist" href="register-pharmacist" />
      <div
        className={`${styles.registerPharmacistSection} px-4 tablet:px-10 desktop:px-20`}
      >
        <RegisterPharmacistSection />
      </div>
    </>
  );
};

export default RegisterPharmacistPage;
