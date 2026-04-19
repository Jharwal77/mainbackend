import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  toggleSubscription,
  getUserChannelSubscribers,
  getSubscribedChannels,
} from "../controllers/subscription.controller.js";

const router = Router();

// Protected routes - require login
router.use(verifyJWT);

// Toggle subscribe/unsubscribe to a channel
router.route("/c/:channelId").post(toggleSubscription);

// Get all subscribers of a channel
router.route("/u/:channelId").get(getUserChannelSubscribers);

// Get all channels a user is subscribed to
router.route("/s/:subscriberId").get(getSubscribedChannels);

export default router;
