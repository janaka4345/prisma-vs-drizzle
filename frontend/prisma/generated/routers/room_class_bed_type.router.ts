import { t, publicProcedure } from "./helpers/createRouter";
import { room_class_bed_typeAggregateSchema } from "../schemas/aggregateroom_class_bed_type.schema";
import { room_class_bed_typeCreateManySchema } from "../schemas/createManyroom_class_bed_type.schema";
import { room_class_bed_typeCreateOneSchema } from "../schemas/createOneroom_class_bed_type.schema";
import { room_class_bed_typeDeleteManySchema } from "../schemas/deleteManyroom_class_bed_type.schema";
import { room_class_bed_typeDeleteOneSchema } from "../schemas/deleteOneroom_class_bed_type.schema";
import { room_class_bed_typeFindFirstSchema } from "../schemas/findFirstroom_class_bed_type.schema";
import { room_class_bed_typeFindManySchema } from "../schemas/findManyroom_class_bed_type.schema";
import { room_class_bed_typeFindUniqueSchema } from "../schemas/findUniqueroom_class_bed_type.schema";
import { room_class_bed_typeGroupBySchema } from "../schemas/groupByroom_class_bed_type.schema";
import { room_class_bed_typeUpdateManySchema } from "../schemas/updateManyroom_class_bed_type.schema";
import { room_class_bed_typeUpdateOneSchema } from "../schemas/updateOneroom_class_bed_type.schema";
import { room_class_bed_typeUpsertSchema } from "../schemas/upsertOneroom_class_bed_type.schema";

export const room_class_bed_typesRouter = t.router({
  aggregateroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateroom_class_bed_type = await ctx.prisma.room_class_bed_type.aggregate(input);
      return aggregateroom_class_bed_type;
    }),
  createManyroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyroom_class_bed_type = await ctx.prisma.room_class_bed_type.createMany(input);
      return createManyroom_class_bed_type;
    }),
  createOneroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneroom_class_bed_type = await ctx.prisma.room_class_bed_type.create(input);
      return createOneroom_class_bed_type;
    }),
  deleteManyroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyroom_class_bed_type = await ctx.prisma.room_class_bed_type.deleteMany(input);
      return deleteManyroom_class_bed_type;
    }),
  deleteOneroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneroom_class_bed_type = await ctx.prisma.room_class_bed_type.delete(input);
      return deleteOneroom_class_bed_type;
    }),
  findFirstroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstroom_class_bed_type = await ctx.prisma.room_class_bed_type.findFirst(input);
      return findFirstroom_class_bed_type;
    }),
  findFirstroom_class_bed_typeOrThrow: publicProcedure
    .input(room_class_bed_typeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstroom_class_bed_typeOrThrow = await ctx.prisma.room_class_bed_type.findFirstOrThrow(input);
      return findFirstroom_class_bed_typeOrThrow;
    }),
  findManyroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeFindManySchema).query(async ({ ctx, input }) => {
      const findManyroom_class_bed_type = await ctx.prisma.room_class_bed_type.findMany(input);
      return findManyroom_class_bed_type;
    }),
  findUniqueroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueroom_class_bed_type = await ctx.prisma.room_class_bed_type.findUnique(input);
      return findUniqueroom_class_bed_type;
    }),
  findUniqueroom_class_bed_typeOrThrow: publicProcedure
    .input(room_class_bed_typeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueroom_class_bed_typeOrThrow = await ctx.prisma.room_class_bed_type.findUniqueOrThrow(input);
      return findUniqueroom_class_bed_typeOrThrow;
    }),
  groupByroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeGroupBySchema).query(async ({ ctx, input }) => {
      const groupByroom_class_bed_type = await ctx.prisma.room_class_bed_type.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByroom_class_bed_type;
    }),
  updateManyroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyroom_class_bed_type = await ctx.prisma.room_class_bed_type.updateMany(input);
      return updateManyroom_class_bed_type;
    }),
  updateOneroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneroom_class_bed_type = await ctx.prisma.room_class_bed_type.update(input);
      return updateOneroom_class_bed_type;
    }),
  upsertOneroom_class_bed_type: publicProcedure
    .input(room_class_bed_typeUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneroom_class_bed_type = await ctx.prisma.room_class_bed_type.upsert(input);
      return upsertOneroom_class_bed_type;
    }),

}) 
