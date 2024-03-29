import { z } from 'zod'
import { RoomCreateManyFloorInputObjectSchema } from './RoomCreateManyFloorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateManyFloorInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => RoomCreateManyFloorInputObjectSchema),
            z.lazy(() => RoomCreateManyFloorInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const RoomCreateManyFloorInputEnvelopeObjectSchema = Schema
