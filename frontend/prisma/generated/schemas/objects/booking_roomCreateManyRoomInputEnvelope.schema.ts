import { z } from 'zod'
import { booking_roomCreateManyRoomInputObjectSchema } from './booking_roomCreateManyRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateManyRoomInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => booking_roomCreateManyRoomInputObjectSchema),
            z.lazy(() => booking_roomCreateManyRoomInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const booking_roomCreateManyRoomInputEnvelopeObjectSchema = Schema
