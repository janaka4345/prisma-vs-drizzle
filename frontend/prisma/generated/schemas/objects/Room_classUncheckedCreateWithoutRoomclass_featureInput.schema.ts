import { z } from 'zod'
import { RoomUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema } from './RoomUncheckedCreateNestedManyWithoutRoom_classInput.schema'
import { room_class_bed_typeUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUncheckedCreateNestedManyWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUncheckedCreateWithoutRoomclass_featureInput> =
    z
        .object({
            id: z.string().optional(),
            class_name: z.string(),
            base_price: z.number(),
            Room: z
                .lazy(
                    () =>
                        RoomUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema
                )
                .optional(),
            room_class_bed_type: z
                .lazy(
                    () =>
                        room_class_bed_typeUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema =
    Schema
