import { z } from 'zod';

/*
 * Login Form Input Schema
 */
export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email').trim(),
  password: z.string().min(1, 'Password is required').trim(),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
