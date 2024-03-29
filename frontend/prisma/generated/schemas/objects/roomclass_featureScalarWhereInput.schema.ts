import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => roomclass_featureScalarWhereInputObjectSchema),
                z
                    .lazy(() => roomclass_featureScalarWhereInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => roomclass_featureScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => roomclass_featureScalarWhereInputObjectSchema),
                z
                    .lazy(() => roomclass_featureScalarWhereInputObjectSchema)
                    .array(),
            ])
            .optional(),
        featureId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_classId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
    })
    .strict()

export const roomclass_featureScalarWhereInputObjectSchema = Schema
