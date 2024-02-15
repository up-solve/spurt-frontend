import { z } from 'zod';
import validator from 'validator';

/*
 * Register Pharmacist Form Input Schema
 */
export const registerPharmacistFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required').trim(),
  email: z.string().min(1, 'Email is required').email('Invalid email').trim(),
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
