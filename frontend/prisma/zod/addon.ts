import * as z from "zod"

export const AddonModel = z.object({
  id: z.string(),
  addon_name: z.string(),
  Price: z.number(),
})
