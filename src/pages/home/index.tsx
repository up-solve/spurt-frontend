import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@store/authStore';

import SeoComponent from '@components/atoms/SeoComponent';
import Card from '@components/atoms/Card';

import {
  LOGIN_PAGE,
  PAYMENT_HISTORY_PAGE,
  REGISTER_ADMIN_PAGE,
  REGISTER_PHARMACIST_PAGE,
} from '@constants/routes';

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
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
      <SeoComponent title="Home" href="/home" />
      <div className="px-4 tablet:px-10 desktop:px-20">
        <div className="grid grid-cols-1 gap-4 py-4 tablet:py-20 tablet:grid-cols-2">
          <Card
            type="pharmacist"
            heading="Add Pharmacist"
            link={REGISTER_PHARMACIST_PAGE}
          />
          <Card type="admin" heading="Add Admin" link={REGISTER_ADMIN_PAGE} />
          <Card
            type="payment"
            heading="Payment History"
            link={PAYMENT_HISTORY_PAGE}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
