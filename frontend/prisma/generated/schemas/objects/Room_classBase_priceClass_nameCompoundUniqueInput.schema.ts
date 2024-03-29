import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classBase_priceClass_nameCompoundUniqueInput> =
    z
        .object({
            base_price: z.number(),
            class_name: z.string(),
        })
        .strict()

export const Room_classBase_priceClass_nameCompoundUniqueInputObjectSchema =
    Schema
