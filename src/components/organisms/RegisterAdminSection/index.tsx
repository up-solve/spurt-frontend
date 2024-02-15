import { FC, useState } from 'react';
import swal from 'sweetalert';
import { isAxiosError } from 'axios';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerAdminRequest } from '@services/register-admin';
import { registerAdminFormSchema } from '@validations/register-admin-form';

import Button from '@components/atoms/Button';
import FormInput from '@components/atoms/FormInput';
import ErrorMessage from '@components/atoms/ErrorMessage';
import SuccessMessage from '@components/atoms/SuccessMessage';

import { ERRORS, MESSAGES } from '@constants/app';

export interface RegisterAdminSectionProps {}

const RegisterAdminSection: FC<RegisterAdminSectionProps> = () => {
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const formMethods = useForm({
    resolver: zodResolver(registerAdminFormSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setFormError('');
    setFormSuccess('');
    try {
      const res = await registerAdminRequest(
        data?.firstName,
        data?.email,
        data?.password
      );
      // eslint-disable-next-line no-console
      console.log(res);
      if (res.status === 200) {
        setFormError('');
        setFormSuccess(MESSAGES.ADMIN_CREATED);
        swal(MESSAGES.ADMIN_CREATED, {
          icon: 'success',
        });

        formMethods.reset();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      setFormSuccess('');
      if (isAxiosError(error)) {
        const status = error.response?.data.status;
        if (status === 401 || status === 403) {
          setFormError(error.response?.data?.message);
        } else {
          setFormError(ERRORS.SERVER_ERROR);
        }
      } else {
        setFormError(ERRORS.SERVER_ERROR);
      }
    }
  };

  const isLoading = formMethods.formState.isSubmitting;

  return (
    <div className="flex flex-col gap-4 py-2 justify-evenly tablet:flex-row tablet:justify-between tablet:items-center tablet:py-16">
      <div className="flex flex-col w-full gap-6">
        <p className="mb-4 text-xl font-bold text-brown200">Register Admin</p>
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <div className="grid justify-center w-full grid-cols-1 pb-4 desktop:grid-cols-2">
              <FormInput
                type="text"
                name="firstName"
                placeholder="enter first name"
                label="First Name *"
                disabled={isLoading}
              />
              <FormInput
                type="text"
                name="email"
                placeholder="enter email"
                label="Email *"
                disabled={isLoading}
              />
              <FormInput
                type="password"
                name="password"
                placeholder="enter password"
                label="Password *"
                disabled={isLoading}
              />
              <FormInput
                type="password"
                name="confirmPassword"
                placeholder="enter confirmPassword"
                label="Confirm Password *"
                disabled={isLoading}
              />
              <div className="flex flex-col items-center w-64 mt-10 tablet:w-96 desktop:w-80">
                <Button isLoading={isLoading} type="primary" submitType>
                  Create
                </Button>
                {formError !== '' ? (
                  <div className="pt-4 text-xl">
                    <ErrorMessage errMessage={formError} iconRequired />
                  </div>
                ) : null}
                {formSuccess !== '' ? (
                  <div className="pt-4 text-xl">
                    <SuccessMessage successMessage={formSuccess} />
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterAdminSection;
