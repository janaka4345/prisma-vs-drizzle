import { t, publicProcedure } from "./helpers/createRouter";
import { Bed_typeAggregateSchema } from "../schemas/aggregateBed_type.schema";
import { Bed_typeCreateManySchema } from "../schemas/createManyBed_type.schema";
import { Bed_typeCreateOneSchema } from "../schemas/createOneBed_type.schema";
import { Bed_typeDeleteManySchema } from "../schemas/deleteManyBed_type.schema";
import { Bed_typeDeleteOneSchema } from "../schemas/deleteOneBed_type.schema";
import { Bed_typeFindFirstSchema } from "../schemas/findFirstBed_type.schema";
import { Bed_typeFindManySchema } from "../schemas/findManyBed_type.schema";
import { Bed_typeFindUniqueSchema } from "../schemas/findUniqueBed_type.schema";
import { Bed_typeGroupBySchema } from "../schemas/groupByBed_type.schema";
import { Bed_typeUpdateManySchema } from "../schemas/updateManyBed_type.schema";
import { Bed_typeUpdateOneSchema } from "../schemas/updateOneBed_type.schema";
import { Bed_typeUpsertSchema } from "../schemas/upsertOneBed_type.schema";

export const bed_typesRouter = t.router({
  aggregateBed_type: publicProcedure
    .input(Bed_typeAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateBed_type = await ctx.prisma.bed_type.aggregate(input);
      return aggregateBed_type;
    }),
  createManyBed_type: publicProcedure
    .input(Bed_typeCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyBed_type = await ctx.prisma.bed_type.createMany(input);
      return createManyBed_type;
    }),
  createOneBed_type: publicProcedure
    .input(Bed_typeCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneBed_type = await ctx.prisma.bed_type.create(input);
      return createOneBed_type;
    }),
  deleteManyBed_type: publicProcedure
    .input(Bed_typeDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyBed_type = await ctx.prisma.bed_type.deleteMany(input);
      return deleteManyBed_type;
    }),
  deleteOneBed_type: publicProcedure
    .input(Bed_typeDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneBed_type = await ctx.prisma.bed_type.delete(input);
      return deleteOneBed_type;
    }),
  findFirstBed_type: publicProcedure
    .input(Bed_typeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBed_type = await ctx.prisma.bed_type.findFirst(input);
      return findFirstBed_type;
    }),
  findFirstBed_typeOrThrow: publicProcedure
    .input(Bed_typeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBed_typeOrThrow = await ctx.prisma.bed_type.findFirstOrThrow(input);
      return findFirstBed_typeOrThrow;
    }),
  findManyBed_type: publicProcedure
    .input(Bed_typeFindManySchema).query(async ({ ctx, input }) => {
      const findManyBed_type = await ctx.prisma.bed_type.findMany(input);
      return findManyBed_type;
    }),
  findUniqueBed_type: publicProcedure
    .input(Bed_typeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBed_type = await ctx.prisma.bed_type.findUnique(input);
      return findUniqueBed_type;
    }),
  findUniqueBed_typeOrThrow: publicProcedure
    .input(Bed_typeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBed_typeOrThrow = await ctx.prisma.bed_type.findUniqueOrThrow(input);
      return findUniqueBed_typeOrThrow;
    }),
  groupByBed_type: publicProcedure
    .input(Bed_typeGroupBySchema).query(async ({ ctx, input }) => {
      const groupByBed_type = await ctx.prisma.bed_type.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBed_type;
    }),
  updateManyBed_type: publicProcedure
    .input(Bed_typeUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyBed_type = await ctx.prisma.bed_type.updateMany(input);
      return updateManyBed_type;
    }),
  updateOneBed_type: publicProcedure
    .input(Bed_typeUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneBed_type = await ctx.prisma.bed_type.update(input);
      return updateOneBed_type;
    }),
  upsertOneBed_type: publicProcedure
    .input(Bed_typeUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneBed_type = await ctx.prisma.bed_type.upsert(input);
      return upsertOneBed_type;
    }),

}) 
