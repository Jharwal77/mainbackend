import mongoose from "mongoose";
import { Like } from "../models/like.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// POST /api/v1/likes/toggle/v/:videoId
const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!mongoose.isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID");
  }

  const existingLike = await Like.findOne({
    video: videoId,
    likeBy: req.user._id,
  });

  if (existingLike) {
    await Like.findByIdAndDelete(existingLike._id);
    return res
      .status(200)
      .json(new ApiResponse(200, { isLiked: false }, "Video unliked"));
  }

  await Like.create({ video: videoId, likeBy: req.user._id });
  return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }, "Video liked"));
});

// POST /api/v1/likes/toggle/c/:commentId
const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  if (!mongoose.isValidObjectId(commentId)) {
    throw new ApiError(400, "Invalid comment ID");
  }

  const existingLike = await Like.findOne({
    comment: commentId,
    likeBy: req.user._id,
  });

  if (existingLike) {
    await Like.findByIdAndDelete(existingLike._id);
    return res
      .status(200)
      .json(new ApiResponse(200, { isLiked: false }, "Comment unliked"));
  }

  await Like.create({ comment: commentId, likeBy: req.user._id });
  return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }, "Comment liked"));
});

// POST /api/v1/likes/toggle/t/:tweetId
const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!mongoose.isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet ID");
  }

  const existingLike = await Like.findOne({
    tweet: tweetId,
    likeBy: req.user._id,
  });

  if (existingLike) {
    await Like.findByIdAndDelete(existingLike._id);
    return res
      .status(200)
      .json(new ApiResponse(200, { isLiked: false }, "Tweet unliked"));
  }

  await Like.create({ tweet: tweetId, likeBy: req.user._id });
  return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }, "Tweet liked"));
});

// GET /api/v1/likes/videos
const getLikedVideos = asyncHandler(async (req, res) => {
  const likedVideos = await Like.aggregate([
    {
      $match: {
        likeBy: new mongoose.Types.ObjectId(req.user._id),
        video: { $exists: true },
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "video",
        foreignField: "_id",
        as: "video",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                { $project: { fullName: 1, username: 1, avatar: 1 } },
              ],
            },
          },
          { $addFields: { owner: { $first: "$owner" } } },
        ],
      },
    },
    { $addFields: { video: { $first: "$video" } } },
    { $match: { "video.isPublished": true } },
    { $sort: { createdAt: -1 } },
  ]);

  return res
    .status(200)
    .json(new ApiResponse(200, likedVideos, "Liked videos fetched"));
});

export { toggleVideoLike, toggleCommentLike, toggleTweetLike, getLikedVideos };
