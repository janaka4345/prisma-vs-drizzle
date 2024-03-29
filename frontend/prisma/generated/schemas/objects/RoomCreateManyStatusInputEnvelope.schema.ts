import { z } from 'zod'
import { RoomCreateManyStatusInputObjectSchema } from './RoomCreateManyStatusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateManyStatusInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => RoomCreateManyStatusInputObjectSchema),
            z.lazy(() => RoomCreateManyStatusInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const RoomCreateManyStatusInputEnvelopeObjectSchema = Schema
