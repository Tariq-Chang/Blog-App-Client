import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string().min(1, "Username is required").max(25),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    password: z.string().min(1, "Password is required").min(3, "Password is too short"),
})

export type registerSchemaType = z.infer<typeof registerSchema>;