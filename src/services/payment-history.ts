import axios from '@helpers/axios';

import { PAYMENT_HISTORY_ENDPOINT } from '@constants/routes';

export const paymentHistoryRequest = async (phoneNo: string) => {
  return axios.post(PAYMENT_HISTORY_ENDPOINT, {
    phoneNo,
  });
};
