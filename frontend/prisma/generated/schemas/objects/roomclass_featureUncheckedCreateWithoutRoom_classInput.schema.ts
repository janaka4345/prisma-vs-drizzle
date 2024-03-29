import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedCreateWithoutRoom_classInput> =
    z
        .object({
            featureId: z.string(),
        })
        .strict()

export const roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema =
    Schema
