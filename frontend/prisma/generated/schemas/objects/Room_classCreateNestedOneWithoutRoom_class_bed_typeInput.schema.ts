import { z } from 'zod'
import { Room_classCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classCreateWithoutRoom_class_bed_typeInput.schema'
import { Room_classUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classUncheckedCreateWithoutRoom_class_bed_typeInput.schema'
import { Room_classCreateOrConnectWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classCreateOrConnectWithoutRoom_class_bed_typeInput.schema'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateNestedOneWithoutRoom_class_bed_typeInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            Room_classCreateWithoutRoom_class_bed_typeInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Room_classUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        Room_classCreateOrConnectWithoutRoom_class_bed_typeInputObjectSchema
                )
                .optional(),
            connect: z
                .lazy(() => Room_classWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const Room_classCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema =
    Schema
