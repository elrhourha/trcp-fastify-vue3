import {appRouter, server} from "@/app";
import {fastifyTRPCPlugin, FastifyTRPCPluginOptions} from "@trpc/server/adapters/fastify";
import {createContext} from "@/trpc/context";
export * from '@/user';
export * from '@/todo';


type AppRouter = typeof appRouter;

server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
        router:appRouter,
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

export type {AppRouter};
