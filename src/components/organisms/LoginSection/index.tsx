import { FC, useState } from 'react';
import { isAxiosError } from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { loginSchema } from '@validations/auth';
import { useAuthStore } from '@store/authStore';
import { loginRequest } from '@services/auth';

import Button from '@components/atoms/Button';
import FormInput from '@components/atoms/FormInput';
import ErrorMessage from '@components/atoms/ErrorMessage';

import { ERRORS } from '@constants/app';
import { HOME_PAGE } from '@constants/routes';

export interface LoginSectionProps {}

const LoginSection: FC<LoginSectionProps> = () => {
  const navigate = useNavigate();

  const setAuthToken = useAuthStore((state) => state.setAuthToken);
  const setUser = useAuthStore((state) => state.setUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const [isInvalidCred, setIsInvalidCred] = useState(false);
  const [formError, setFormError] = useState('');

  const formMethods = useForm({
    resolver: zodResolver(loginSchema),
  });
  const isLoading = formMethods.formState.isSubmitting;

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await loginRequest(data?.email, data?.password);

      // eslint-disable-next-line no-console
      console.log(res);

      if (res.status === 200) {
        setFormError('');
        setIsInvalidCred(false);

        const loginResponse = res.data.data;

        setAuthToken(loginResponse?.email);
        setUser({
          name: {
            first: loginResponse.firstName,
          },
          email: loginResponse.email,
        });
      }
      navigate(HOME_PAGE);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      if (isAxiosError(error)) {
        const status = error.response?.data?.status;
        if (status === 401 || status === 403) {
          setIsInvalidCred(true);
          setFormError(ERRORS.INVALID_CRED);
        } else {
          setIsInvalidCred(false);
          setFormError(ERRORS.SERVER_ERROR);
        }
      } else {
        setIsInvalidCred(false);
        setFormError(ERRORS.SERVER_ERROR);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-10">
      {isAuthenticated && user && <Navigate to={HOME_PAGE} />}
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInput
            type="email"
            name="email"
            placeholder="enter email"
            label="Email Address *"
            disabled={isLoading}
            hasError={isInvalidCred}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="enter password"
            label="Password *"
            disabled={isLoading}
            hasError={isInvalidCred}
          />
          <div className="mt-10">
            <Button isLoading={isLoading} type="primary" submitType>
              Sign In
            </Button>
          </div>
          {formError !== '' && (
            <div className="flex justify-center text-xs text-center">
              <ErrorMessage errMessage={formError} iconRequired />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginSection;
