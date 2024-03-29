import { z } from 'zod'
import { room_class_bed_typeCreateManyBed_typeInputObjectSchema } from './room_class_bed_typeCreateManyBed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateManyBed_typeInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(
                    () => room_class_bed_typeCreateManyBed_typeInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            room_class_bed_typeCreateManyBed_typeInputObjectSchema
                    )
                    .array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict()

export const room_class_bed_typeCreateManyBed_typeInputEnvelopeObjectSchema =
    Schema
