import { z } from "zod";

export const exampleSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email("Invalid email address"),
    age: z.number().int().positive().optional(),
});