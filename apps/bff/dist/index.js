"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("@trpc/server/adapters/fastify");
const fastify_2 = __importDefault(require("fastify"));
const context_1 = require("./routers/context");
const router_1 = require("./routers/router");
const shared_1 = require("@trcp-fastify-vue3/shared");
const server = (0, fastify_2.default)({
    maxParamLength: 5000,
});
(0, shared_1.greetUser)({ firstName: 'Karim' });
server.register(fastify_1.fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
        router: router_1.router,
        createContext: context_1.createContext,
        onError({ path, error }) {
            // report to error monitoring
            console.error(`Error in tRPC handler on path '${path}':`, error);
        },
    },
});
(async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server listening on port ${3000}`);
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();
