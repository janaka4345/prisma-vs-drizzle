import * as z from "zod"

export const Payment_statusModel = z.object({
  id: z.string(),
  status: z.string(),
})
