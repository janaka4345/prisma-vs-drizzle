import { t, publicProcedure } from "./helpers/createRouter";
import { FloorAggregateSchema } from "../schemas/aggregateFloor.schema";
import { FloorCreateManySchema } from "../schemas/createManyFloor.schema";
import { FloorCreateOneSchema } from "../schemas/createOneFloor.schema";
import { FloorDeleteManySchema } from "../schemas/deleteManyFloor.schema";
import { FloorDeleteOneSchema } from "../schemas/deleteOneFloor.schema";
import { FloorFindFirstSchema } from "../schemas/findFirstFloor.schema";
import { FloorFindManySchema } from "../schemas/findManyFloor.schema";
import { FloorFindUniqueSchema } from "../schemas/findUniqueFloor.schema";
import { FloorGroupBySchema } from "../schemas/groupByFloor.schema";
import { FloorUpdateManySchema } from "../schemas/updateManyFloor.schema";
import { FloorUpdateOneSchema } from "../schemas/updateOneFloor.schema";
import { FloorUpsertSchema } from "../schemas/upsertOneFloor.schema";

export const floorsRouter = t.router({
  aggregateFloor: publicProcedure
    .input(FloorAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateFloor = await ctx.prisma.floor.aggregate(input);
      return aggregateFloor;
    }),
  createManyFloor: publicProcedure
    .input(FloorCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyFloor = await ctx.prisma.floor.createMany(input);
      return createManyFloor;
    }),
  createOneFloor: publicProcedure
    .input(FloorCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneFloor = await ctx.prisma.floor.create(input);
      return createOneFloor;
    }),
  deleteManyFloor: publicProcedure
    .input(FloorDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyFloor = await ctx.prisma.floor.deleteMany(input);
      return deleteManyFloor;
    }),
  deleteOneFloor: publicProcedure
    .input(FloorDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneFloor = await ctx.prisma.floor.delete(input);
      return deleteOneFloor;
    }),
  findFirstFloor: publicProcedure
    .input(FloorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFloor = await ctx.prisma.floor.findFirst(input);
      return findFirstFloor;
    }),
  findFirstFloorOrThrow: publicProcedure
    .input(FloorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFloorOrThrow = await ctx.prisma.floor.findFirstOrThrow(input);
      return findFirstFloorOrThrow;
    }),
  findManyFloor: publicProcedure
    .input(FloorFindManySchema).query(async ({ ctx, input }) => {
      const findManyFloor = await ctx.prisma.floor.findMany(input);
      return findManyFloor;
    }),
  findUniqueFloor: publicProcedure
    .input(FloorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFloor = await ctx.prisma.floor.findUnique(input);
      return findUniqueFloor;
    }),
  findUniqueFloorOrThrow: publicProcedure
    .input(FloorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFloorOrThrow = await ctx.prisma.floor.findUniqueOrThrow(input);
      return findUniqueFloorOrThrow;
    }),
  groupByFloor: publicProcedure
    .input(FloorGroupBySchema).query(async ({ ctx, input }) => {
      const groupByFloor = await ctx.prisma.floor.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFloor;
    }),
  updateManyFloor: publicProcedure
    .input(FloorUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyFloor = await ctx.prisma.floor.updateMany(input);
      return updateManyFloor;
    }),
  updateOneFloor: publicProcedure
    .input(FloorUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneFloor = await ctx.prisma.floor.update(input);
      return updateOneFloor;
    }),
  upsertOneFloor: publicProcedure
    .input(FloorUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneFloor = await ctx.prisma.floor.upsert(input);
      return upsertOneFloor;
    }),

}) 
