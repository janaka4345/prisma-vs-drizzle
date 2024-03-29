import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        addon_name: z.string().optional(),
    })
    .strict()

export const AddonWhereUniqueInputObjectSchema = Schema
