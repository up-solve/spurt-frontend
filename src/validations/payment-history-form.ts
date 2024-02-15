import { z } from 'zod';
import validator from 'validator';

/*
 * Payment History Form Input Schema
 */
export const paymentHistoryFormSchema = z.object({
  phoneNo: z.string().refine(
    (val) =>
      validator.isMobilePhone(val, ['en-IN'], {
        strictMode: false,
      }),
    'Enter valid phone number'
  ),
});

export type TPaymentHistoryFormSchema = z.infer<
  typeof paymentHistoryFormSchema
>;
