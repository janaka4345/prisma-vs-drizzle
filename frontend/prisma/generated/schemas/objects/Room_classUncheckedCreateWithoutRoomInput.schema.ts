import { z } from 'zod'
import { room_class_bed_typeUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUncheckedCreateNestedManyWithoutRoom_classInput.schema'
import { roomclass_featureUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema } from './roomclass_featureUncheckedCreateNestedManyWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUncheckedCreateWithoutRoomInput> = z
    .object({
        id: z.string().optional(),
        class_name: z.string(),
        base_price: z.number(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema
            )
            .optional(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_classUncheckedCreateWithoutRoomInputObjectSchema = Schema
