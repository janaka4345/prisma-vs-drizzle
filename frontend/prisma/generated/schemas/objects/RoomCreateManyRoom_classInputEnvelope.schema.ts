import { z } from 'zod'
import { RoomCreateManyRoom_classInputObjectSchema } from './RoomCreateManyRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateManyRoom_classInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => RoomCreateManyRoom_classInputObjectSchema),
            z.lazy(() => RoomCreateManyRoom_classInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const RoomCreateManyRoom_classInputEnvelopeObjectSchema = Schema
