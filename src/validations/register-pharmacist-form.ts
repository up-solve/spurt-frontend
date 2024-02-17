import { z } from 'zod';
import validator from 'validator';

/*
 * Register Pharmacist Form Input Schema
 */
export const registerPharmacistFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required').trim(),
  lastName: z.string().min(1, 'Last Name is required').trim(),
  phoneNo: z.string().refine(
    (val) =>
      validator.isMobilePhone(val, ['en-IN'], {
        strictMode: false,
      }),
    'Enter valid phone number'
  ),
});

export type TRegisterPharmacistFormSchema = z.infer<
  typeof registerPharmacistFormSchema
>;
