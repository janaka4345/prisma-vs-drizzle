import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Roomclass_featureCountAggregateInputType> = z
    .object({
        featureId: z.literal(true).optional(),
        room_classId: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict()

export const Roomclass_featureCountAggregateInputObjectSchema = Schema
