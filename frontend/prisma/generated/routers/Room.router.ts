import { t, publicProcedure } from "./helpers/createRouter";
import { RoomAggregateSchema } from "../schemas/aggregateRoom.schema";
import { RoomCreateManySchema } from "../schemas/createManyRoom.schema";
import { RoomCreateOneSchema } from "../schemas/createOneRoom.schema";
import { RoomDeleteManySchema } from "../schemas/deleteManyRoom.schema";
import { RoomDeleteOneSchema } from "../schemas/deleteOneRoom.schema";
import { RoomFindFirstSchema } from "../schemas/findFirstRoom.schema";
import { RoomFindManySchema } from "../schemas/findManyRoom.schema";
import { RoomFindUniqueSchema } from "../schemas/findUniqueRoom.schema";
import { RoomGroupBySchema } from "../schemas/groupByRoom.schema";
import { RoomUpdateManySchema } from "../schemas/updateManyRoom.schema";
import { RoomUpdateOneSchema } from "../schemas/updateOneRoom.schema";
import { RoomUpsertSchema } from "../schemas/upsertOneRoom.schema";

export const roomsRouter = t.router({
  aggregateRoom: publicProcedure
    .input(RoomAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateRoom = await ctx.prisma.room.aggregate(input);
      return aggregateRoom;
    }),
  createManyRoom: publicProcedure
    .input(RoomCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyRoom = await ctx.prisma.room.createMany(input);
      return createManyRoom;
    }),
  createOneRoom: publicProcedure
    .input(RoomCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneRoom = await ctx.prisma.room.create(input);
      return createOneRoom;
    }),
  deleteManyRoom: publicProcedure
    .input(RoomDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyRoom = await ctx.prisma.room.deleteMany(input);
      return deleteManyRoom;
    }),
  deleteOneRoom: publicProcedure
    .input(RoomDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneRoom = await ctx.prisma.room.delete(input);
      return deleteOneRoom;
    }),
  findFirstRoom: publicProcedure
    .input(RoomFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRoom = await ctx.prisma.room.findFirst(input);
      return findFirstRoom;
    }),
  findFirstRoomOrThrow: publicProcedure
    .input(RoomFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRoomOrThrow = await ctx.prisma.room.findFirstOrThrow(input);
      return findFirstRoomOrThrow;
    }),
  findManyRoom: publicProcedure
    .input(RoomFindManySchema).query(async ({ ctx, input }) => {
      const findManyRoom = await ctx.prisma.room.findMany(input);
      return findManyRoom;
    }),
  findUniqueRoom: publicProcedure
    .input(RoomFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRoom = await ctx.prisma.room.findUnique(input);
      return findUniqueRoom;
    }),
  findUniqueRoomOrThrow: publicProcedure
    .input(RoomFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRoomOrThrow = await ctx.prisma.room.findUniqueOrThrow(input);
      return findUniqueRoomOrThrow;
    }),
  groupByRoom: publicProcedure
    .input(RoomGroupBySchema).query(async ({ ctx, input }) => {
      const groupByRoom = await ctx.prisma.room.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRoom;
    }),
  updateManyRoom: publicProcedure
    .input(RoomUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyRoom = await ctx.prisma.room.updateMany(input);
      return updateManyRoom;
    }),
  updateOneRoom: publicProcedure
    .input(RoomUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneRoom = await ctx.prisma.room.update(input);
      return updateOneRoom;
    }),
  upsertOneRoom: publicProcedure
    .input(RoomUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneRoom = await ctx.prisma.room.upsert(input);
      return upsertOneRoom;
    }),

}) 
