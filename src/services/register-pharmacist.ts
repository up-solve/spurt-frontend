import axios from '@helpers/axios';

import { REGISTER_PHARMACIST_ENDPOINT } from '@constants/routes';

export const registerPharmacistRequest = async (
  firstname: string,
  email: string,
  phoneNo: string
) => {
  return axios.post(REGISTER_PHARMACIST_ENDPOINT, {
    firstname,
    email,
    phoneNo,
    user_type: 'pharmacist',
  });
};
