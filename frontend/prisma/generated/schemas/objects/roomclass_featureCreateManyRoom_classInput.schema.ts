import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateManyRoom_classInput> = z
    .object({
        featureId: z.string(),
    })
    .strict()

export const roomclass_featureCreateManyRoom_classInputObjectSchema = Schema
