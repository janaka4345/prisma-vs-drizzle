import { t, publicProcedure } from "./helpers/createRouter";
import { booking_roomAggregateSchema } from "../schemas/aggregatebooking_room.schema";
import { booking_roomCreateManySchema } from "../schemas/createManybooking_room.schema";
import { booking_roomCreateOneSchema } from "../schemas/createOnebooking_room.schema";
import { booking_roomDeleteManySchema } from "../schemas/deleteManybooking_room.schema";
import { booking_roomDeleteOneSchema } from "../schemas/deleteOnebooking_room.schema";
import { booking_roomFindFirstSchema } from "../schemas/findFirstbooking_room.schema";
import { booking_roomFindManySchema } from "../schemas/findManybooking_room.schema";
import { booking_roomFindUniqueSchema } from "../schemas/findUniquebooking_room.schema";
import { booking_roomGroupBySchema } from "../schemas/groupBybooking_room.schema";
import { booking_roomUpdateManySchema } from "../schemas/updateManybooking_room.schema";
import { booking_roomUpdateOneSchema } from "../schemas/updateOnebooking_room.schema";
import { booking_roomUpsertSchema } from "../schemas/upsertOnebooking_room.schema";

export const booking_roomsRouter = t.router({
  aggregatebooking_room: publicProcedure
    .input(booking_roomAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatebooking_room = await ctx.prisma.booking_room.aggregate(input);
      return aggregatebooking_room;
    }),
  createManybooking_room: publicProcedure
    .input(booking_roomCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManybooking_room = await ctx.prisma.booking_room.createMany(input);
      return createManybooking_room;
    }),
  createOnebooking_room: publicProcedure
    .input(booking_roomCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnebooking_room = await ctx.prisma.booking_room.create(input);
      return createOnebooking_room;
    }),
  deleteManybooking_room: publicProcedure
    .input(booking_roomDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManybooking_room = await ctx.prisma.booking_room.deleteMany(input);
      return deleteManybooking_room;
    }),
  deleteOnebooking_room: publicProcedure
    .input(booking_roomDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnebooking_room = await ctx.prisma.booking_room.delete(input);
      return deleteOnebooking_room;
    }),
  findFirstbooking_room: publicProcedure
    .input(booking_roomFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstbooking_room = await ctx.prisma.booking_room.findFirst(input);
      return findFirstbooking_room;
    }),
  findFirstbooking_roomOrThrow: publicProcedure
    .input(booking_roomFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstbooking_roomOrThrow = await ctx.prisma.booking_room.findFirstOrThrow(input);
      return findFirstbooking_roomOrThrow;
    }),
  findManybooking_room: publicProcedure
    .input(booking_roomFindManySchema).query(async ({ ctx, input }) => {
      const findManybooking_room = await ctx.prisma.booking_room.findMany(input);
      return findManybooking_room;
    }),
  findUniquebooking_room: publicProcedure
    .input(booking_roomFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquebooking_room = await ctx.prisma.booking_room.findUnique(input);
      return findUniquebooking_room;
    }),
  findUniquebooking_roomOrThrow: publicProcedure
    .input(booking_roomFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquebooking_roomOrThrow = await ctx.prisma.booking_room.findUniqueOrThrow(input);
      return findUniquebooking_roomOrThrow;
    }),
  groupBybooking_room: publicProcedure
    .input(booking_roomGroupBySchema).query(async ({ ctx, input }) => {
      const groupBybooking_room = await ctx.prisma.booking_room.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBybooking_room;
    }),
  updateManybooking_room: publicProcedure
    .input(booking_roomUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManybooking_room = await ctx.prisma.booking_room.updateMany(input);
      return updateManybooking_room;
    }),
  updateOnebooking_room: publicProcedure
    .input(booking_roomUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnebooking_room = await ctx.prisma.booking_room.update(input);
      return updateOnebooking_room;
    }),
  upsertOnebooking_room: publicProcedure
    .input(booking_roomUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnebooking_room = await ctx.prisma.booking_room.upsert(input);
      return upsertOnebooking_room;
    }),

}) 
