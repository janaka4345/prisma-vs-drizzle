import { httpBatchLink } from "@trpc/client";
import { t } from "../trpcSever/trpc";
import { appRouter } from "../trpcSever";


const createCaller =t.createCallerFactory(appRouter)
export const serverClient=createCaller({
    links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
})
