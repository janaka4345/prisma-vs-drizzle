import { t, publicProcedure } from "./helpers/createRouter";
import { BookingAggregateSchema } from "../schemas/aggregateBooking.schema";
import { BookingCreateManySchema } from "../schemas/createManyBooking.schema";
import { BookingCreateOneSchema } from "../schemas/createOneBooking.schema";
import { BookingDeleteManySchema } from "../schemas/deleteManyBooking.schema";
import { BookingDeleteOneSchema } from "../schemas/deleteOneBooking.schema";
import { BookingFindFirstSchema } from "../schemas/findFirstBooking.schema";
import { BookingFindManySchema } from "../schemas/findManyBooking.schema";
import { BookingFindUniqueSchema } from "../schemas/findUniqueBooking.schema";
import { BookingGroupBySchema } from "../schemas/groupByBooking.schema";
import { BookingUpdateManySchema } from "../schemas/updateManyBooking.schema";
import { BookingUpdateOneSchema } from "../schemas/updateOneBooking.schema";
import { BookingUpsertSchema } from "../schemas/upsertOneBooking.schema";

export const bookingsRouter = t.router({
  aggregateBooking: publicProcedure
    .input(BookingAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateBooking = await ctx.prisma.booking.aggregate(input);
      return aggregateBooking;
    }),
  createManyBooking: publicProcedure
    .input(BookingCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyBooking = await ctx.prisma.booking.createMany(input);
      return createManyBooking;
    }),
  createOneBooking: publicProcedure
    .input(BookingCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneBooking = await ctx.prisma.booking.create(input);
      return createOneBooking;
    }),
  deleteManyBooking: publicProcedure
    .input(BookingDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyBooking = await ctx.prisma.booking.deleteMany(input);
      return deleteManyBooking;
    }),
  deleteOneBooking: publicProcedure
    .input(BookingDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneBooking = await ctx.prisma.booking.delete(input);
      return deleteOneBooking;
    }),
  findFirstBooking: publicProcedure
    .input(BookingFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBooking = await ctx.prisma.booking.findFirst(input);
      return findFirstBooking;
    }),
  findFirstBookingOrThrow: publicProcedure
    .input(BookingFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBookingOrThrow = await ctx.prisma.booking.findFirstOrThrow(input);
      return findFirstBookingOrThrow;
    }),
  findManyBooking: publicProcedure
    .input(BookingFindManySchema).query(async ({ ctx, input }) => {
      const findManyBooking = await ctx.prisma.booking.findMany(input);
      return findManyBooking;
    }),
  findUniqueBooking: publicProcedure
    .input(BookingFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBooking = await ctx.prisma.booking.findUnique(input);
      return findUniqueBooking;
    }),
  findUniqueBookingOrThrow: publicProcedure
    .input(BookingFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBookingOrThrow = await ctx.prisma.booking.findUniqueOrThrow(input);
      return findUniqueBookingOrThrow;
    }),
  groupByBooking: publicProcedure
    .input(BookingGroupBySchema).query(async ({ ctx, input }) => {
      const groupByBooking = await ctx.prisma.booking.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBooking;
    }),
  updateManyBooking: publicProcedure
    .input(BookingUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyBooking = await ctx.prisma.booking.updateMany(input);
      return updateManyBooking;
    }),
  updateOneBooking: publicProcedure
    .input(BookingUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneBooking = await ctx.prisma.booking.update(input);
      return updateOneBooking;
    }),
  upsertOneBooking: publicProcedure
    .input(BookingUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneBooking = await ctx.prisma.booking.upsert(input);
      return upsertOneBooking;
    }),

}) 
