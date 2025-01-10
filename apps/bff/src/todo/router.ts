import {publicProcedure, router} from "@/trpc/trpc";
import {z} from "zod";
import {CreateTodoInput, createTodoSchema} from "@/todo/types";

export const todoRouter = router({
    getTodo: publicProcedure.input(z.string()).query(async (opts) => {
        return { id: opts.input, name: 'Backend User ' + opts.input };
    }),
    createTodo: publicProcedure
        .input(createTodoSchema)
        .mutation(async (opts) => {
            const userInput : CreateTodoInput = opts.input;
            return { message: `User ${userInput.title} created successfully!` };
        }),
});
