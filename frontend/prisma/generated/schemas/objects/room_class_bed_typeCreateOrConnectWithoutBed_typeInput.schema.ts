import { z } from 'zod'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'
import { room_class_bed_typeCreateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeCreateWithoutBed_typeInput.schema'
import { room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUncheckedCreateWithoutBed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateOrConnectWithoutBed_typeInput> =
    z
        .object({
            where: z.lazy(
                () => room_class_bed_typeWhereUniqueInputObjectSchema
            ),
            create: z.union([
                z.lazy(
                    () =>
                        room_class_bed_typeCreateWithoutBed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema
                ),
            ]),
        })
        .strict()

export const room_class_bed_typeCreateOrConnectWithoutBed_typeInputObjectSchema =
    Schema
