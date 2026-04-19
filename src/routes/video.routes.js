// ============================================================
// COPY THIS FILE TO: your-backend/src/routes/video.routes.js
// ============================================================

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  publishAVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
  getUserVideos,
} from "../controllers/video.controller.js";

const router = Router();

// ─── Public Routes (No Auth Needed) ──────────────────────────
router.route("/").get(getAllVideos);
router.route("/user/:userId").get(getUserVideos);
router.route("/:videoId").get(getVideoById);

// ─── Protected Routes (Auth Required) ────────────────────────
router.use(verifyJWT);

router.route("/").post(
  upload.fields([
    { name: "videoFile", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  publishAVideo
);

router
  .route("/:videoId")
  .patch(upload.single("thumbnail"), updateVideo)
  .delete(deleteVideo);

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router;
