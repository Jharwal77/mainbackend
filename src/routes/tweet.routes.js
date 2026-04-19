import { Router } from "express";
import {
    createTweet,
    getAllTweets,
    getUserTweets,
    updateTweet,
    deleteTweet,
} from "../controllers/tweet.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Public routes
router.route("/").get(verifyJWT, getAllTweets);
router.route("/user/:userId").get(getUserTweets);

// Protected routes
router.use(verifyJWT);
router.route("/").post(createTweet);
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router;
