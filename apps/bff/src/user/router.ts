import {publicProcedure, router} from "@/trpc/trpc";
import {z} from "zod";
import {CreateUserInput, createUserSchema} from "@/user/types";

export const userRouter = router({
    getUser: publicProcedure.input(z.string()).query(async (opts) => {
        return { id: opts.input, name: 'Backend User ' + opts.input };
    }),
    createUser: publicProcedure
        .input(createUserSchema)
        .mutation(async (opts) => {
            const userInput : CreateUserInput = opts.input;
            return { message: `User ${userInput.name} created successfully!` };
        }),
});
