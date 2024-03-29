import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutStatusInputObjectSchema } from './RoomUpdateWithoutStatusInput.schema'
import { RoomUncheckedUpdateWithoutStatusInputObjectSchema } from './RoomUncheckedUpdateWithoutStatusInput.schema'
import { RoomCreateWithoutStatusInputObjectSchema } from './RoomCreateWithoutStatusInput.schema'
import { RoomUncheckedCreateWithoutStatusInputObjectSchema } from './RoomUncheckedCreateWithoutStatusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutStatusInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => RoomUpdateWithoutStatusInputObjectSchema),
            z.lazy(() => RoomUncheckedUpdateWithoutStatusInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => RoomCreateWithoutStatusInputObjectSchema),
            z.lazy(() => RoomUncheckedCreateWithoutStatusInputObjectSchema),
        ]),
    })
    .strict()

export const RoomUpsertWithWhereUniqueWithoutStatusInputObjectSchema = Schema
