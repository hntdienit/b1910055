import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import PostsController from "../controllers/posts.js";

const router = express.Router();

router
  .route("/")
  .get(PostsController.getPostsNotAuth)
  .post(PostsController.postPosts);

router
  .route("/auth")
  .get(AuthMiddleware.validateToken, PostsController.getPosts)
  .post(PostsController.postPosts);

router.route("/:id").get(PostsController.getPost);

export default router;
