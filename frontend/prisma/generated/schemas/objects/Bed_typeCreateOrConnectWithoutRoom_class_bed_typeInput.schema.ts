import { z } from 'zod'
import { Bed_typeWhereUniqueInputObjectSchema } from './Bed_typeWhereUniqueInput.schema'
import { Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInput> =
    z
        .object({
            where: z.lazy(() => Bed_typeWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () =>
                        Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema
                ),
            ]),
        })
        .strict()

export const Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInputObjectSchema =
    Schema
