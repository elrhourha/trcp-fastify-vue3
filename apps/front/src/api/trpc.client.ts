import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@trcp-fastify-vue3/bff'

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_API_URL,
    }),
  ],
})
