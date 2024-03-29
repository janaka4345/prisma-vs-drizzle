import { z } from 'zod'
import { room_class_bed_typeCreateNestedManyWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateNestedManyWithoutRoom_classInput.schema'
import { roomclass_featureCreateNestedManyWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateNestedManyWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateWithoutRoomInput> = z
    .object({
        id: z.string().optional(),
        class_name: z.string(),
        base_price: z.number(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeCreateNestedManyWithoutRoom_classInputObjectSchema
            )
            .optional(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureCreateNestedManyWithoutRoom_classInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_classCreateWithoutRoomInputObjectSchema = Schema
