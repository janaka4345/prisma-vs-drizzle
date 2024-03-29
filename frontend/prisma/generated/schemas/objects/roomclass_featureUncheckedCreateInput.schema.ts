import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedCreateInput> = z
    .object({
        featureId: z.string(),
        room_classId: z.string(),
    })
    .strict()

export const roomclass_featureUncheckedCreateInputObjectSchema = Schema
