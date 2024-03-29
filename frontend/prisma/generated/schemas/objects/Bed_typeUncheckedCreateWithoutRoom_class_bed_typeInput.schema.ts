import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInput> =
    z
        .object({
            id: z.string().optional(),
            bed_type: z.string(),
        })
        .strict()

export const Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema =
    Schema
