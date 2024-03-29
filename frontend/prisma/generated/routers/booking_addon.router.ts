import { t, publicProcedure } from "./helpers/createRouter";
import { booking_addonAggregateSchema } from "../schemas/aggregatebooking_addon.schema";
import { booking_addonCreateManySchema } from "../schemas/createManybooking_addon.schema";
import { booking_addonCreateOneSchema } from "../schemas/createOnebooking_addon.schema";
import { booking_addonDeleteManySchema } from "../schemas/deleteManybooking_addon.schema";
import { booking_addonDeleteOneSchema } from "../schemas/deleteOnebooking_addon.schema";
import { booking_addonFindFirstSchema } from "../schemas/findFirstbooking_addon.schema";
import { booking_addonFindManySchema } from "../schemas/findManybooking_addon.schema";
import { booking_addonFindUniqueSchema } from "../schemas/findUniquebooking_addon.schema";
import { booking_addonGroupBySchema } from "../schemas/groupBybooking_addon.schema";
import { booking_addonUpdateManySchema } from "../schemas/updateManybooking_addon.schema";
import { booking_addonUpdateOneSchema } from "../schemas/updateOnebooking_addon.schema";
import { booking_addonUpsertSchema } from "../schemas/upsertOnebooking_addon.schema";

export const booking_addonsRouter = t.router({
  aggregatebooking_addon: publicProcedure
    .input(booking_addonAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatebooking_addon = await ctx.prisma.booking_addon.aggregate(input);
      return aggregatebooking_addon;
    }),
  createManybooking_addon: publicProcedure
    .input(booking_addonCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManybooking_addon = await ctx.prisma.booking_addon.createMany(input);
      return createManybooking_addon;
    }),
  createOnebooking_addon: publicProcedure
    .input(booking_addonCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnebooking_addon = await ctx.prisma.booking_addon.create(input);
      return createOnebooking_addon;
    }),
  deleteManybooking_addon: publicProcedure
    .input(booking_addonDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManybooking_addon = await ctx.prisma.booking_addon.deleteMany(input);
      return deleteManybooking_addon;
    }),
  deleteOnebooking_addon: publicProcedure
    .input(booking_addonDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnebooking_addon = await ctx.prisma.booking_addon.delete(input);
      return deleteOnebooking_addon;
    }),
  findFirstbooking_addon: publicProcedure
    .input(booking_addonFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstbooking_addon = await ctx.prisma.booking_addon.findFirst(input);
      return findFirstbooking_addon;
    }),
  findFirstbooking_addonOrThrow: publicProcedure
    .input(booking_addonFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstbooking_addonOrThrow = await ctx.prisma.booking_addon.findFirstOrThrow(input);
      return findFirstbooking_addonOrThrow;
    }),
  findManybooking_addon: publicProcedure
    .input(booking_addonFindManySchema).query(async ({ ctx, input }) => {
      const findManybooking_addon = await ctx.prisma.booking_addon.findMany(input);
      return findManybooking_addon;
    }),
  findUniquebooking_addon: publicProcedure
    .input(booking_addonFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquebooking_addon = await ctx.prisma.booking_addon.findUnique(input);
      return findUniquebooking_addon;
    }),
  findUniquebooking_addonOrThrow: publicProcedure
    .input(booking_addonFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquebooking_addonOrThrow = await ctx.prisma.booking_addon.findUniqueOrThrow(input);
      return findUniquebooking_addonOrThrow;
    }),
  groupBybooking_addon: publicProcedure
    .input(booking_addonGroupBySchema).query(async ({ ctx, input }) => {
      const groupBybooking_addon = await ctx.prisma.booking_addon.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBybooking_addon;
    }),
  updateManybooking_addon: publicProcedure
    .input(booking_addonUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManybooking_addon = await ctx.prisma.booking_addon.updateMany(input);
      return updateManybooking_addon;
    }),
  updateOnebooking_addon: publicProcedure
    .input(booking_addonUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnebooking_addon = await ctx.prisma.booking_addon.update(input);
      return updateOnebooking_addon;
    }),
  upsertOnebooking_addon: publicProcedure
    .input(booking_addonUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnebooking_addon = await ctx.prisma.booking_addon.upsert(input);
      return upsertOnebooking_addon;
    }),

}) 
