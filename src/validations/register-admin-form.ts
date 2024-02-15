import { z } from 'zod';
import validator from 'validator';

/*
 * Register Admin Form Input Schema
 */
export const registerAdminFormSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required').trim(),
    email: z.string().min(1, 'Email is required').email('Invalid email').trim(),
    password: z
      .string()
      .refine(
        validator.isStrongPassword,
        'Password should contain minimum of 8 characters with lowercase, uppercase and symbol'
      ),
    confirmPassword: z
      .string()
      .refine(
        validator.isStrongPassword,
        'Password should contain minimum of 8 characters with lowercase, uppercase and symbol'
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TRegisterAdminFormSchema = z.infer<typeof registerAdminFormSchema>;
