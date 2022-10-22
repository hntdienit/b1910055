import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import LikesController from "../controllers/like.js";

const router = express.Router();

// router.route("/").get(PostsController.getPosts).post(PostsController.postPosts);

router.route("/").post(AuthMiddleware.validateToken, LikesController.postLike);

export default router;
