import { z } from 'zod'
import { RoomCreateNestedManyWithoutRoom_classInputObjectSchema } from './RoomCreateNestedManyWithoutRoom_classInput.schema'
import { room_class_bed_typeCreateNestedManyWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateNestedManyWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateWithoutRoomclass_featureInput> =
    z
        .object({
            id: z.string().optional(),
            class_name: z.string(),
            base_price: z.number(),
            Room: z
                .lazy(
                    () => RoomCreateNestedManyWithoutRoom_classInputObjectSchema
                )
                .optional(),
            room_class_bed_type: z
                .lazy(
                    () =>
                        room_class_bed_typeCreateNestedManyWithoutRoom_classInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const Room_classCreateWithoutRoomclass_featureInputObjectSchema = Schema
