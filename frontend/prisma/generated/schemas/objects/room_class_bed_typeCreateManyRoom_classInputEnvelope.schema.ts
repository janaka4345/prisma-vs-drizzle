import { z } from 'zod'
import { room_class_bed_typeCreateManyRoom_classInputObjectSchema } from './room_class_bed_typeCreateManyRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateManyRoom_classInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(
                    () =>
                        room_class_bed_typeCreateManyRoom_classInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            room_class_bed_typeCreateManyRoom_classInputObjectSchema
                    )
                    .array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict()

export const room_class_bed_typeCreateManyRoom_classInputEnvelopeObjectSchema =
    Schema
