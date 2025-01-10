import {z} from "zod";

export const createUserSchema = z.object({ name: z.string().min(3), age: z.number().min(18) })
export type CreateUserInput = z.infer<typeof createUserSchema>
