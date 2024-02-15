import { FC, useState } from 'react';
import { isAxiosError } from 'axios';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { paymentHistoryRequest } from '@services/payment-history';
import { paymentHistoryFormSchema } from '@validations/payment-history-form';

import Button from '@components/atoms/Button';
import FormSearchInput from '@components/atoms/FormSearchInput';
import ErrorMessage from '@components/atoms/ErrorMessage';

import { ERRORS } from '@constants/app';

export interface PaymentHistorySectionProps {}

const PaymentHistorySection: FC<PaymentHistorySectionProps> = () => {
  const [formError, setFormError] = useState('');

  const formMethods = useForm({
    resolver: zodResolver(paymentHistoryFormSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setFormError('');
    try {
      const res = await paymentHistoryRequest(data?.phoneNo);

      // eslint-disable-next-line no-console
      console.log(res);

      if (res.status === 200) {
        setFormError('');
        formMethods.reset();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      if (isAxiosError(error)) {
        const status = error.response?.data?.status;
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
          Find payment history for a pharmacist
        </p>
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <div className="grid justify-center w-full grid-cols-1 pb-4">
              <div className="">
                <FormSearchInput
                  name="phoneNo"
                  placeholder="enter phone number"
                  disabled={isLoading}
                />
              </div>
              <div className="flex flex-col items-center">
                <Button isLoading={isLoading} type="primary" submitType>
                  Find
                </Button>
                {formError !== '' ? (
                  <div className="pt-4 text-xl">
                    <ErrorMessage errMessage={formError} iconRequired />
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

export default PaymentHistorySection;
