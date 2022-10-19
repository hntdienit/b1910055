import express from "express";

import UsersController from "../controllers/users.js";

const router = express.Router();

router.route("/register").post(UsersController.register);

router.route("/login").post(UsersController.login)

// router.route("/:id").get(UsersController.getPost)

export default router;
