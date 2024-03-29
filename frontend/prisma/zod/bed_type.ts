import * as z from "zod"

export const Bed_typeModel = z.object({
  id: z.string(),
  bed_type: z.string(),
})
