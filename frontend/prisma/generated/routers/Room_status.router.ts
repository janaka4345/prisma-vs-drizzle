import { t, publicProcedure } from "./helpers/createRouter";
import { Room_statusAggregateSchema } from "../schemas/aggregateRoom_status.schema";
import { Room_statusCreateManySchema } from "../schemas/createManyRoom_status.schema";
import { Room_statusCreateOneSchema } from "../schemas/createOneRoom_status.schema";
import { Room_statusDeleteManySchema } from "../schemas/deleteManyRoom_status.schema";
import { Room_statusDeleteOneSchema } from "../schemas/deleteOneRoom_status.schema";
import { Room_statusFindFirstSchema } from "../schemas/findFirstRoom_status.schema";
import { Room_statusFindManySchema } from "../schemas/findManyRoom_status.schema";
import { Room_statusFindUniqueSchema } from "../schemas/findUniqueRoom_status.schema";
import { Room_statusGroupBySchema } from "../schemas/groupByRoom_status.schema";
import { Room_statusUpdateManySchema } from "../schemas/updateManyRoom_status.schema";
import { Room_statusUpdateOneSchema } from "../schemas/updateOneRoom_status.schema";
import { Room_statusUpsertSchema } from "../schemas/upsertOneRoom_status.schema";

export const room_statusesRouter = t.router({
  aggregateRoom_status: publicProcedure
    .input(Room_statusAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateRoom_status = await ctx.prisma.room_status.aggregate(input);
      return aggregateRoom_status;
    }),
  createManyRoom_status: publicProcedure
    .input(Room_statusCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyRoom_status = await ctx.prisma.room_status.createMany(input);
      return createManyRoom_status;
    }),
  createOneRoom_status: publicProcedure
    .input(Room_statusCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneRoom_status = await ctx.prisma.room_status.create(input);
      return createOneRoom_status;
    }),
  deleteManyRoom_status: publicProcedure
    .input(Room_statusDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyRoom_status = await ctx.prisma.room_status.deleteMany(input);
      return deleteManyRoom_status;
    }),
  deleteOneRoom_status: publicProcedure
    .input(Room_statusDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneRoom_status = await ctx.prisma.room_status.delete(input);
      return deleteOneRoom_status;
    }),
  findFirstRoom_status: publicProcedure
    .input(Room_statusFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRoom_status = await ctx.prisma.room_status.findFirst(input);
      return findFirstRoom_status;
    }),
  findFirstRoom_statusOrThrow: publicProcedure
    .input(Room_statusFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRoom_statusOrThrow = await ctx.prisma.room_status.findFirstOrThrow(input);
      return findFirstRoom_statusOrThrow;
    }),
  findManyRoom_status: publicProcedure
    .input(Room_statusFindManySchema).query(async ({ ctx, input }) => {
      const findManyRoom_status = await ctx.prisma.room_status.findMany(input);
      return findManyRoom_status;
    }),
  findUniqueRoom_status: publicProcedure
    .input(Room_statusFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRoom_status = await ctx.prisma.room_status.findUnique(input);
      return findUniqueRoom_status;
    }),
  findUniqueRoom_statusOrThrow: publicProcedure
    .input(Room_statusFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRoom_statusOrThrow = await ctx.prisma.room_status.findUniqueOrThrow(input);
      return findUniqueRoom_statusOrThrow;
    }),
  groupByRoom_status: publicProcedure
    .input(Room_statusGroupBySchema).query(async ({ ctx, input }) => {
      const groupByRoom_status = await ctx.prisma.room_status.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRoom_status;
    }),
  updateManyRoom_status: publicProcedure
    .input(Room_statusUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyRoom_status = await ctx.prisma.room_status.updateMany(input);
      return updateManyRoom_status;
    }),
  updateOneRoom_status: publicProcedure
    .input(Room_statusUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneRoom_status = await ctx.prisma.room_status.update(input);
      return updateOneRoom_status;
    }),
  upsertOneRoom_status: publicProcedure
    .input(Room_statusUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneRoom_status = await ctx.prisma.room_status.upsert(input);
      return upsertOneRoom_status;
    }),

}) 
