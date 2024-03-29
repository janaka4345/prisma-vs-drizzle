import { t, publicProcedure } from "./helpers/createRouter";
import { roomclass_featureAggregateSchema } from "../schemas/aggregateroomclass_feature.schema";
import { roomclass_featureCreateManySchema } from "../schemas/createManyroomclass_feature.schema";
import { roomclass_featureCreateOneSchema } from "../schemas/createOneroomclass_feature.schema";
import { roomclass_featureDeleteManySchema } from "../schemas/deleteManyroomclass_feature.schema";
import { roomclass_featureDeleteOneSchema } from "../schemas/deleteOneroomclass_feature.schema";
import { roomclass_featureFindFirstSchema } from "../schemas/findFirstroomclass_feature.schema";
import { roomclass_featureFindManySchema } from "../schemas/findManyroomclass_feature.schema";
import { roomclass_featureFindUniqueSchema } from "../schemas/findUniqueroomclass_feature.schema";
import { roomclass_featureGroupBySchema } from "../schemas/groupByroomclass_feature.schema";
import { roomclass_featureUpdateManySchema } from "../schemas/updateManyroomclass_feature.schema";
import { roomclass_featureUpdateOneSchema } from "../schemas/updateOneroomclass_feature.schema";
import { roomclass_featureUpsertSchema } from "../schemas/upsertOneroomclass_feature.schema";

export const roomclass_featuresRouter = t.router({
  aggregateroomclass_feature: publicProcedure
    .input(roomclass_featureAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateroomclass_feature = await ctx.prisma.roomclass_feature.aggregate(input);
      return aggregateroomclass_feature;
    }),
  createManyroomclass_feature: publicProcedure
    .input(roomclass_featureCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyroomclass_feature = await ctx.prisma.roomclass_feature.createMany(input);
      return createManyroomclass_feature;
    }),
  createOneroomclass_feature: publicProcedure
    .input(roomclass_featureCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneroomclass_feature = await ctx.prisma.roomclass_feature.create(input);
      return createOneroomclass_feature;
    }),
  deleteManyroomclass_feature: publicProcedure
    .input(roomclass_featureDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyroomclass_feature = await ctx.prisma.roomclass_feature.deleteMany(input);
      return deleteManyroomclass_feature;
    }),
  deleteOneroomclass_feature: publicProcedure
    .input(roomclass_featureDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneroomclass_feature = await ctx.prisma.roomclass_feature.delete(input);
      return deleteOneroomclass_feature;
    }),
  findFirstroomclass_feature: publicProcedure
    .input(roomclass_featureFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstroomclass_feature = await ctx.prisma.roomclass_feature.findFirst(input);
      return findFirstroomclass_feature;
    }),
  findFirstroomclass_featureOrThrow: publicProcedure
    .input(roomclass_featureFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstroomclass_featureOrThrow = await ctx.prisma.roomclass_feature.findFirstOrThrow(input);
      return findFirstroomclass_featureOrThrow;
    }),
  findManyroomclass_feature: publicProcedure
    .input(roomclass_featureFindManySchema).query(async ({ ctx, input }) => {
      const findManyroomclass_feature = await ctx.prisma.roomclass_feature.findMany(input);
      return findManyroomclass_feature;
    }),
  findUniqueroomclass_feature: publicProcedure
    .input(roomclass_featureFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueroomclass_feature = await ctx.prisma.roomclass_feature.findUnique(input);
      return findUniqueroomclass_feature;
    }),
  findUniqueroomclass_featureOrThrow: publicProcedure
    .input(roomclass_featureFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueroomclass_featureOrThrow = await ctx.prisma.roomclass_feature.findUniqueOrThrow(input);
      return findUniqueroomclass_featureOrThrow;
    }),
  groupByroomclass_feature: publicProcedure
    .input(roomclass_featureGroupBySchema).query(async ({ ctx, input }) => {
      const groupByroomclass_feature = await ctx.prisma.roomclass_feature.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByroomclass_feature;
    }),
  updateManyroomclass_feature: publicProcedure
    .input(roomclass_featureUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyroomclass_feature = await ctx.prisma.roomclass_feature.updateMany(input);
      return updateManyroomclass_feature;
    }),
  updateOneroomclass_feature: publicProcedure
    .input(roomclass_featureUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneroomclass_feature = await ctx.prisma.roomclass_feature.update(input);
      return updateOneroomclass_feature;
    }),
  upsertOneroomclass_feature: publicProcedure
    .input(roomclass_featureUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneroomclass_feature = await ctx.prisma.roomclass_feature.upsert(input);
      return upsertOneroomclass_feature;
    }),

}) 
