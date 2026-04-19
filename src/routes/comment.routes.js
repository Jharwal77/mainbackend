import { Router } from "express";
import {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Public - get comments
router.route("/:videoId").get(getVideoComments);

// Protected routes
router.use(verifyJWT);

router.route("/:videoId").post(addComment);
router.route("/c/:commentId").patch(updateComment).delete(deleteComment);

export default router;
