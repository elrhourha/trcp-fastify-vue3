import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import {CreateUserInput, createUserSchema} from "@trcp-fastify-vue3/shared";

const t = initTRPC.create()

export const router = t.router({
    getUser: t.procedure.input(z.string()).query(async (opts) => {
        return { id: opts.input, name: 'Backend User ' + opts.input };
    }),
    createUser: t.procedure
        .input(createUserSchema)
        .mutation(async (opts) => {
            const userInput : CreateUserInput = opts.input;
            return { message: `User ${userInput.name} created successfully!` };
        }),
});

export type AppRouter = typeof router;
