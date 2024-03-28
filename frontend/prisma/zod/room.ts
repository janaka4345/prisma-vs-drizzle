import * as z from "zod"
import { CompleteFloor, RelatedFloorModel, CompleteRoom_class, RelatedRoom_classModel, CompleteRoom_status, RelatedRoom_statusModel, Completebooking_room, Relatedbooking_roomModel } from "./index"

export const RoomModel = z.object({
  
  room_number: z.number().int(),
  floorId: z.string(),
  room_classId: z.string(),
  statusId: z.string(),
})

export interface CompleteRoom extends z.infer<typeof RoomModel> {
  floor: CompleteFloor
  room_class: CompleteRoom_class
  status: CompleteRoom_status
  booking_room: Completebooking_room[]
}

/**
 * RelatedRoomModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoomModel: z.ZodSchema<CompleteRoom> = z.lazy(() => RoomModel.extend({
  floor: RelatedFloorModel,
  room_class: RelatedRoom_classModel,
  status: RelatedRoom_statusModel,
  booking_room: Relatedbooking_roomModel.array(),
}))
