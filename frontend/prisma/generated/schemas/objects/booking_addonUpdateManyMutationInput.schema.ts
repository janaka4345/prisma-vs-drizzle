import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateManyMutationInput> = z
    .object({})
    .strict()

export const booking_addonUpdateManyMutationInputObjectSchema = Schema
