import { t, publicProcedure } from "./helpers/createRouter";
import { Payment_statusAggregateSchema } from "../schemas/aggregatePayment_status.schema";
import { Payment_statusCreateManySchema } from "../schemas/createManyPayment_status.schema";
import { Payment_statusCreateOneSchema } from "../schemas/createOnePayment_status.schema";
import { Payment_statusDeleteManySchema } from "../schemas/deleteManyPayment_status.schema";
import { Payment_statusDeleteOneSchema } from "../schemas/deleteOnePayment_status.schema";
import { Payment_statusFindFirstSchema } from "../schemas/findFirstPayment_status.schema";
import { Payment_statusFindManySchema } from "../schemas/findManyPayment_status.schema";
import { Payment_statusFindUniqueSchema } from "../schemas/findUniquePayment_status.schema";
import { Payment_statusGroupBySchema } from "../schemas/groupByPayment_status.schema";
import { Payment_statusUpdateManySchema } from "../schemas/updateManyPayment_status.schema";
import { Payment_statusUpdateOneSchema } from "../schemas/updateOnePayment_status.schema";
import { Payment_statusUpsertSchema } from "../schemas/upsertOnePayment_status.schema";

export const payment_statusesRouter = t.router({
  aggregatePayment_status: publicProcedure
    .input(Payment_statusAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePayment_status = await ctx.prisma.payment_status.aggregate(input);
      return aggregatePayment_status;
    }),
  createManyPayment_status: publicProcedure
    .input(Payment_statusCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPayment_status = await ctx.prisma.payment_status.createMany(input);
      return createManyPayment_status;
    }),
  createOnePayment_status: publicProcedure
    .input(Payment_statusCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePayment_status = await ctx.prisma.payment_status.create(input);
      return createOnePayment_status;
    }),
  deleteManyPayment_status: publicProcedure
    .input(Payment_statusDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPayment_status = await ctx.prisma.payment_status.deleteMany(input);
      return deleteManyPayment_status;
    }),
  deleteOnePayment_status: publicProcedure
    .input(Payment_statusDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePayment_status = await ctx.prisma.payment_status.delete(input);
      return deleteOnePayment_status;
    }),
  findFirstPayment_status: publicProcedure
    .input(Payment_statusFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPayment_status = await ctx.prisma.payment_status.findFirst(input);
      return findFirstPayment_status;
    }),
  findFirstPayment_statusOrThrow: publicProcedure
    .input(Payment_statusFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPayment_statusOrThrow = await ctx.prisma.payment_status.findFirstOrThrow(input);
      return findFirstPayment_statusOrThrow;
    }),
  findManyPayment_status: publicProcedure
    .input(Payment_statusFindManySchema).query(async ({ ctx, input }) => {
      const findManyPayment_status = await ctx.prisma.payment_status.findMany(input);
      return findManyPayment_status;
    }),
  findUniquePayment_status: publicProcedure
    .input(Payment_statusFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePayment_status = await ctx.prisma.payment_status.findUnique(input);
      return findUniquePayment_status;
    }),
  findUniquePayment_statusOrThrow: publicProcedure
    .input(Payment_statusFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePayment_statusOrThrow = await ctx.prisma.payment_status.findUniqueOrThrow(input);
      return findUniquePayment_statusOrThrow;
    }),
  groupByPayment_status: publicProcedure
    .input(Payment_statusGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPayment_status = await ctx.prisma.payment_status.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPayment_status;
    }),
  updateManyPayment_status: publicProcedure
    .input(Payment_statusUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPayment_status = await ctx.prisma.payment_status.updateMany(input);
      return updateManyPayment_status;
    }),
  updateOnePayment_status: publicProcedure
    .input(Payment_statusUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePayment_status = await ctx.prisma.payment_status.update(input);
      return updateOnePayment_status;
    }),
  upsertOnePayment_status: publicProcedure
    .input(Payment_statusUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePayment_status = await ctx.prisma.payment_status.upsert(input);
      return upsertOnePayment_status;
    }),

}) 
