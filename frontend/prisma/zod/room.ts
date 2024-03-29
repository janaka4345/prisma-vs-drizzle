import * as z from 'zod'

export const RoomModel = z.object({
    room_number: z.number().int(),
    floorId: z.string(),
    room_classId: z.string(),
    statusId: z.string(),
})
