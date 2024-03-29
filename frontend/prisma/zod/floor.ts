import * as z from "zod"

export const FloorModel = z.object({
  id: z.string(),
  floor_number: z.number().int(),
})
