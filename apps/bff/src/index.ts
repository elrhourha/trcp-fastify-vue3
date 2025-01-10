import {
    fastifyTRPCPlugin,
    FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import {createContext} from '@/routers/context';
import {router, type AppRouter} from '@/routers/router';
import fastifyCors from '@fastify/cors';


export type {AppRouter};

const server = fastify({
    maxParamLength: 5000,
});

server.register(fastifyCors, {
    origin: '*',
});

server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
        router,
        createContext,
        onError({path, error}) {
            console.error(`Error in tRPC handler on path '${path}':`, error);
        },
    } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
});
(async () => {
    try {
        await server.listen({port: 3000});
        console.log(`Server listening on port ${3000}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();


