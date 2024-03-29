import * as z from "zod"

export const Room_statusModel = z.object({
  id: z.string(),
  status: z.string(),
})
