import { FC, useState } from 'react';
import swal from 'sweetalert';
import { isAxiosError } from 'axios';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerPharmacistRequest } from '@services/register-pharmacist';
import { registerPharmacistFormSchema } from '@validations/register-pharmacist-form';

import Button from '@components/atoms/Button';
import FormInput from '@components/atoms/FormInput';
import ErrorMessage from '@components/atoms/ErrorMessage';
import SuccessMessage from '@components/atoms/SuccessMessage';

import { ERRORS, MESSAGES } from '@constants/app';

export interface RegisterPharmacistSectionProps {}

const RegisterPharmacistSection: FC<RegisterPharmacistSectionProps> = () => {
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const formMethods = useForm({
    resolver: zodResolver(registerPharmacistFormSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setFormError('');
    setFormSuccess('');
    try {
      const res = await registerPharmacistRequest(
        data?.firstName,
        data?.email,
        data?.phoneNo
      );
      if (res.status === 200) {
        setFormError('');
        setFormSuccess(MESSAGES.PHARMACIST_CREATED);
        swal(MESSAGES.PHARMACIST_CREATED, {
          icon: 'success',
        });

        formMethods.reset();
      }
    } catch (error) {
      setFormSuccess('');
      if (isAxiosError(error)) {
        const status = error.response?.status;
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
        <p className="mb-4 text-xl font-bold text-brown200">
          Register Pharmacist
        </p>
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
                type="text"
                name="phoneNo"
                placeholder="enter phone number"
                label="Phone Number *"
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col items-center w-64 mt-6 tablet:w-96 desktop:w-80">
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
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterPharmacistSection;
