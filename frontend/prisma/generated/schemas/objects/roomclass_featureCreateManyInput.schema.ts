import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateManyInput> = z
    .object({
        featureId: z.string(),
        room_classId: z.string(),
    })
    .strict()

export const roomclass_featureCreateManyInputObjectSchema = Schema
