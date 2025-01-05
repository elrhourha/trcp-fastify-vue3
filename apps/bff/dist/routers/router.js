"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
const t = server_1.initTRPC.create();
exports.router = t.router({
    getUser: t.procedure.input(zod_1.z.string()).query(async (opts) => {
        // Simulating fetching user
        return { id: opts.input, name: 'Backend User ' + opts.input };
    }),
    createUser: t.procedure
        .input(zod_1.z.object({ name: zod_1.z.string().min(3), age: zod_1.z.number().min(18) }))
        .mutation(async (opts) => {
        return { message: `User ${opts.input.name} created successfully!` };
    }),
});
