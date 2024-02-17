import axios from '@helpers/axios';

import { REGISTER_PHARMACIST_ENDPOINT } from '@constants/routes';

export const registerPharmacistRequest = async (
  firstname: string,
  lastname: string,
  mobile_no: string
) => {
  return axios.post(REGISTER_PHARMACIST_ENDPOINT, {
    firstname,
    lastname,
    mobile_no,
    user_type: 'pharmacist',
  });
};
