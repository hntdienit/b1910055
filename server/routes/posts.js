import express from "express";
import PostsController from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(PostsController.getPosts).post(PostsController.postPosts);

export default router;
