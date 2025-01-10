import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import {router} from "@/trpc/trpc";
import {userRouter} from "@/user/router";
import {todoRouter} from "@/todo/router";



const server = fastify({
    maxParamLength: 5000,
});

server.register(fastifyCors, {
    origin: '*',
});

const appRouter = router({
    user : userRouter,
    todo: todoRouter
})



export {server,appRouter}


