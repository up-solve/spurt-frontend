import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@store/authStore';

import SeoComponent from '@components/atoms/SeoComponent';
import PaymentHistorySection from '@components/organisms/PaymentHistorySection';

import { LOGIN_PAGE } from '@constants/routes';

import styles from './index.module.css';

export interface PaymentHistoryPageProps {}

const PaymentHistoryPage: FC<PaymentHistoryPageProps> = () => {
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
      <SeoComponent title="Payment History" href="payment-history" />
      <div
        className={`${styles.paymentHistorySection} px-4 tablet:px-10 desktop:px-20`}
      >
        <PaymentHistorySection />
      </div>
    </>
  );
};

export default PaymentHistoryPage;
