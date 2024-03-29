import { z } from 'zod'
import { Room_classBase_priceClass_nameCompoundUniqueInputObjectSchema } from './Room_classBase_priceClass_nameCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        base_price_class_name: z
            .lazy(
                () =>
                    Room_classBase_priceClass_nameCompoundUniqueInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_classWhereUniqueInputObjectSchema = Schema
