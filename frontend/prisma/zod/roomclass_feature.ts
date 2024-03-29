import * as z from "zod"

export const roomclass_featureModel = z.object({
  featureId: z.string(),
  room_classId: z.string(),
})
