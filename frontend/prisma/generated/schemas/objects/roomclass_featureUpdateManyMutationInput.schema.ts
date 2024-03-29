import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateManyMutationInput> = z
    .object({})
    .strict()

export const roomclass_featureUpdateManyMutationInputObjectSchema = Schema
