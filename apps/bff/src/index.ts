import {
    fastifyTRPCPlugin,
    FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from './routers/context';
import { router, type AppRouter } from './routers/router';
import {greetUser, User} from "@trcp-fastify-vue3/shared";

const server = fastify({
    maxParamLength: 5000,
});

greetUser({firstName:'Karim'} as User)

server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
        router,
        createContext,
        onError({ path, error }) {
            // report to error monitoring
            console.error(`Error in tRPC handler on path '${path}':`, error);
        },
    } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
});
(async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server listening on port ${3000}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();
