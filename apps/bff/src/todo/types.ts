import {z} from "zod";

export const createTodoSchema = z.object({ title: z.string().min(3), date: z.string().date() })
export type CreateTodoInput = z.infer<typeof createTodoSchema>
