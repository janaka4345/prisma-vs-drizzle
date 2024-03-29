import { t, publicProcedure } from "./helpers/createRouter";
import { Room_classAggregateSchema } from "../schemas/aggregateRoom_class.schema";
import { Room_classCreateManySchema } from "../schemas/createManyRoom_class.schema";
import { Room_classCreateOneSchema } from "../schemas/createOneRoom_class.schema";
import { Room_classDeleteManySchema } from "../schemas/deleteManyRoom_class.schema";
import { Room_classDeleteOneSchema } from "../schemas/deleteOneRoom_class.schema";
import { Room_classFindFirstSchema } from "../schemas/findFirstRoom_class.schema";
import { Room_classFindManySchema } from "../schemas/findManyRoom_class.schema";
import { Room_classFindUniqueSchema } from "../schemas/findUniqueRoom_class.schema";
import { Room_classGroupBySchema } from "../schemas/groupByRoom_class.schema";
import { Room_classUpdateManySchema } from "../schemas/updateManyRoom_class.schema";
import { Room_classUpdateOneSchema } from "../schemas/updateOneRoom_class.schema";
import { Room_classUpsertSchema } from "../schemas/upsertOneRoom_class.schema";

export const room_classesRouter = t.router({
  aggregateRoom_class: publicProcedure
    .input(Room_classAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateRoom_class = await ctx.prisma.room_class.aggregate(input);
      return aggregateRoom_class;
    }),
  createManyRoom_class: publicProcedure
    .input(Room_classCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyRoom_class = await ctx.prisma.room_class.createMany(input);
      return createManyRoom_class;
    }),
  createOneRoom_class: publicProcedure
    .input(Room_classCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneRoom_class = await ctx.prisma.room_class.create(input);
      return createOneRoom_class;
    }),
  deleteManyRoom_class: publicProcedure
    .input(Room_classDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyRoom_class = await ctx.prisma.room_class.deleteMany(input);
      return deleteManyRoom_class;
    }),
  deleteOneRoom_class: publicProcedure
    .input(Room_classDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneRoom_class = await ctx.prisma.room_class.delete(input);
      return deleteOneRoom_class;
    }),
  findFirstRoom_class: publicProcedure
    .input(Room_classFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRoom_class = await ctx.prisma.room_class.findFirst(input);
      return findFirstRoom_class;
    }),
  findFirstRoom_classOrThrow: publicProcedure
    .input(Room_classFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRoom_classOrThrow = await ctx.prisma.room_class.findFirstOrThrow(input);
      return findFirstRoom_classOrThrow;
    }),
  findManyRoom_class: publicProcedure
    .input(Room_classFindManySchema).query(async ({ ctx, input }) => {
      const findManyRoom_class = await ctx.prisma.room_class.findMany(input);
      return findManyRoom_class;
    }),
  findUniqueRoom_class: publicProcedure
    .input(Room_classFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRoom_class = await ctx.prisma.room_class.findUnique(input);
      return findUniqueRoom_class;
    }),
  findUniqueRoom_classOrThrow: publicProcedure
    .input(Room_classFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRoom_classOrThrow = await ctx.prisma.room_class.findUniqueOrThrow(input);
      return findUniqueRoom_classOrThrow;
    }),
  groupByRoom_class: publicProcedure
    .input(Room_classGroupBySchema).query(async ({ ctx, input }) => {
      const groupByRoom_class = await ctx.prisma.room_class.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRoom_class;
    }),
  updateManyRoom_class: publicProcedure
    .input(Room_classUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyRoom_class = await ctx.prisma.room_class.updateMany(input);
      return updateManyRoom_class;
    }),
  updateOneRoom_class: publicProcedure
    .input(Room_classUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneRoom_class = await ctx.prisma.room_class.update(input);
      return updateOneRoom_class;
    }),
  upsertOneRoom_class: publicProcedure
    .input(Room_classUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneRoom_class = await ctx.prisma.room_class.upsert(input);
      return upsertOneRoom_class;
    }),

}) 
