import { httpBatchLink } from '@trpc/client'

import { appRouter } from '../trpcSever'
import { createCaller } from '../trpcSever/trpc'

const caller = createCaller(appRouter)
export const serverClient = caller({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/api/trpc',
        }),
    ],
})
