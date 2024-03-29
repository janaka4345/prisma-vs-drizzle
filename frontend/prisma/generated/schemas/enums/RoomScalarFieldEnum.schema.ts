import { z } from 'zod'

export const RoomScalarFieldEnumSchema = z.enum([
    'id',
    'room_number',
    'floorId',
    'room_classId',
    'statusId',
])
