import { z } from 'zod'
import { roomclass_featureFeatureIdRoom_classIdCompoundUniqueInputObjectSchema } from './roomclass_featureFeatureIdRoom_classIdCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureWhereUniqueInput> = z
    .object({
        featureId_room_classId: z
            .lazy(
                () =>
                    roomclass_featureFeatureIdRoom_classIdCompoundUniqueInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const roomclass_featureWhereUniqueInputObjectSchema = Schema
