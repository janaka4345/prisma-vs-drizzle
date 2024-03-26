import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '../trpcSever'

export const trpc = createTRPCReact<AppRouter>({})
