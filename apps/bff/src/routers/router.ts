import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create()

export const router = t.router({
    getUser: t.procedure.input(z.string()).query(async (opts) => {
        // Simulating fetching user
        return { id: opts.input, name: 'Backend User ' + opts.input };
    }),
    createUser: t.procedure
        .input(z.object({ name: z.string().min(3), age: z.number().min(18) }))
        .mutation(async (opts) => {
            return { message: `User ${opts.input.name} created successfully!` };
        }),
});

export type AppRouter = typeof router;
