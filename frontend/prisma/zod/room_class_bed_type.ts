import * as z from "zod"

export const room_class_bed_typeModel = z.object({
  room_classId: z.string(),
  bed_typeId: z.string(),
  num_of_beds: z.number().int(),
})
