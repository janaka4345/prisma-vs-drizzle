import * as z from "zod"
import { CompleteRoom, RelatedRoomModel } from "./index"

export const Room_statusModel = z.object({
  
  status: z.string(),
})

export interface CompleteRoom_status extends z.infer<typeof Room_statusModel> {
  Room: CompleteRoom[]
}

/**
 * RelatedRoom_statusModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoom_statusModel: z.ZodSchema<CompleteRoom_status> = z.lazy(() => Room_statusModel.extend({
  Room: RelatedRoomModel.array(),
}))
