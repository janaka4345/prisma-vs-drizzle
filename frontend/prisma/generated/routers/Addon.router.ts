import { t, publicProcedure } from "./helpers/createRouter";
import { AddonAggregateSchema } from "../schemas/aggregateAddon.schema";
import { AddonCreateManySchema } from "../schemas/createManyAddon.schema";
import { AddonCreateOneSchema } from "../schemas/createOneAddon.schema";
import { AddonDeleteManySchema } from "../schemas/deleteManyAddon.schema";
import { AddonDeleteOneSchema } from "../schemas/deleteOneAddon.schema";
import { AddonFindFirstSchema } from "../schemas/findFirstAddon.schema";
import { AddonFindManySchema } from "../schemas/findManyAddon.schema";
import { AddonFindUniqueSchema } from "../schemas/findUniqueAddon.schema";
import { AddonGroupBySchema } from "../schemas/groupByAddon.schema";
import { AddonUpdateManySchema } from "../schemas/updateManyAddon.schema";
import { AddonUpdateOneSchema } from "../schemas/updateOneAddon.schema";
import { AddonUpsertSchema } from "../schemas/upsertOneAddon.schema";

export const addonsRouter = t.router({
  aggregateAddon: publicProcedure
    .input(AddonAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAddon = await ctx.prisma.addon.aggregate(input);
      return aggregateAddon;
    }),
  createManyAddon: publicProcedure
    .input(AddonCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAddon = await ctx.prisma.addon.createMany(input);
      return createManyAddon;
    }),
  createOneAddon: publicProcedure
    .input(AddonCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAddon = await ctx.prisma.addon.create(input);
      return createOneAddon;
    }),
  deleteManyAddon: publicProcedure
    .input(AddonDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAddon = await ctx.prisma.addon.deleteMany(input);
      return deleteManyAddon;
    }),
  deleteOneAddon: publicProcedure
    .input(AddonDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAddon = await ctx.prisma.addon.delete(input);
      return deleteOneAddon;
    }),
  findFirstAddon: publicProcedure
    .input(AddonFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAddon = await ctx.prisma.addon.findFirst(input);
      return findFirstAddon;
    }),
  findFirstAddonOrThrow: publicProcedure
    .input(AddonFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAddonOrThrow = await ctx.prisma.addon.findFirstOrThrow(input);
      return findFirstAddonOrThrow;
    }),
  findManyAddon: publicProcedure
    .input(AddonFindManySchema).query(async ({ ctx, input }) => {
      const findManyAddon = await ctx.prisma.addon.findMany(input);
      return findManyAddon;
    }),
  findUniqueAddon: publicProcedure
    .input(AddonFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAddon = await ctx.prisma.addon.findUnique(input);
      return findUniqueAddon;
    }),
  findUniqueAddonOrThrow: publicProcedure
    .input(AddonFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAddonOrThrow = await ctx.prisma.addon.findUniqueOrThrow(input);
      return findUniqueAddonOrThrow;
    }),
  groupByAddon: publicProcedure
    .input(AddonGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAddon = await ctx.prisma.addon.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAddon;
    }),
  updateManyAddon: publicProcedure
    .input(AddonUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAddon = await ctx.prisma.addon.updateMany(input);
      return updateManyAddon;
    }),
  updateOneAddon: publicProcedure
    .input(AddonUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAddon = await ctx.prisma.addon.update(input);
      return updateOneAddon;
    }),
  upsertOneAddon: publicProcedure
    .input(AddonUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAddon = await ctx.prisma.addon.upsert(input);
      return upsertOneAddon;
    }),

}) 
