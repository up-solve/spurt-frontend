import axios from '@helpers/axios';

import { PAYMENT_HISTORY_ENDPOINT } from '@constants/routes';

export const paymentHistoryRequest = async (
  mobile_no: string,
  token: string
) => {
  return axios.post(
    PAYMENT_HISTORY_ENDPOINT,
    {
      mobile_no,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
