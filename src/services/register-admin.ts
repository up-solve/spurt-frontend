import axios from '@helpers/axios';

import { REGISTER_ADMIN_ENDPOINT } from '@constants/routes';

export const registerAdminRequest = async (
  firstname: string,
  email: string,
  password: string
) => {
  return axios.post(REGISTER_ADMIN_ENDPOINT, {
    firstname,
    email,
    password,
    user_type: 'admin',
  });
};
