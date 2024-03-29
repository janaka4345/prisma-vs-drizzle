import { t, publicProcedure } from "./helpers/createRouter";
import { GuestAggregateSchema } from "../schemas/aggregateGuest.schema";
import { GuestCreateManySchema } from "../schemas/createManyGuest.schema";
import { GuestCreateOneSchema } from "../schemas/createOneGuest.schema";
import { GuestDeleteManySchema } from "../schemas/deleteManyGuest.schema";
import { GuestDeleteOneSchema } from "../schemas/deleteOneGuest.schema";
import { GuestFindFirstSchema } from "../schemas/findFirstGuest.schema";
import { GuestFindManySchema } from "../schemas/findManyGuest.schema";
import { GuestFindUniqueSchema } from "../schemas/findUniqueGuest.schema";
import { GuestGroupBySchema } from "../schemas/groupByGuest.schema";
import { GuestUpdateManySchema } from "../schemas/updateManyGuest.schema";
import { GuestUpdateOneSchema } from "../schemas/updateOneGuest.schema";
import { GuestUpsertSchema } from "../schemas/upsertOneGuest.schema";

export const guestsRouter = t.router({
  aggregateGuest: publicProcedure
    .input(GuestAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateGuest = await ctx.prisma.guest.aggregate(input);
      return aggregateGuest;
    }),
  createManyGuest: publicProcedure
    .input(GuestCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyGuest = await ctx.prisma.guest.createMany(input);
      return createManyGuest;
    }),
  createOneGuest: publicProcedure
    .input(GuestCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneGuest = await ctx.prisma.guest.create(input);
      return createOneGuest;
    }),
  deleteManyGuest: publicProcedure
    .input(GuestDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyGuest = await ctx.prisma.guest.deleteMany(input);
      return deleteManyGuest;
    }),
  deleteOneGuest: publicProcedure
    .input(GuestDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneGuest = await ctx.prisma.guest.delete(input);
      return deleteOneGuest;
    }),
  findFirstGuest: publicProcedure
    .input(GuestFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstGuest = await ctx.prisma.guest.findFirst(input);
      return findFirstGuest;
    }),
  findFirstGuestOrThrow: publicProcedure
    .input(GuestFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstGuestOrThrow = await ctx.prisma.guest.findFirstOrThrow(input);
      return findFirstGuestOrThrow;
    }),
  findManyGuest: publicProcedure
    .input(GuestFindManySchema).query(async ({ ctx, input }) => {
      const findManyGuest = await ctx.prisma.guest.findMany(input);
      return findManyGuest;
    }),
  findUniqueGuest: publicProcedure
    .input(GuestFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueGuest = await ctx.prisma.guest.findUnique(input);
      return findUniqueGuest;
    }),
  findUniqueGuestOrThrow: publicProcedure
    .input(GuestFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueGuestOrThrow = await ctx.prisma.guest.findUniqueOrThrow(input);
      return findUniqueGuestOrThrow;
    }),
  groupByGuest: publicProcedure
    .input(GuestGroupBySchema).query(async ({ ctx, input }) => {
      const groupByGuest = await ctx.prisma.guest.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGuest;
    }),
  updateManyGuest: publicProcedure
    .input(GuestUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyGuest = await ctx.prisma.guest.updateMany(input);
      return updateManyGuest;
    }),
  updateOneGuest: publicProcedure
    .input(GuestUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneGuest = await ctx.prisma.guest.update(input);
      return updateOneGuest;
    }),
  upsertOneGuest: publicProcedure
    .input(GuestUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneGuest = await ctx.prisma.guest.upsert(input);
      return upsertOneGuest;
    }),

}) 
