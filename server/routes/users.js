import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import UsersController from "../controllers/users.js";

const router = express.Router();

router.route("/register").post(UsersController.register);

router.route("/login").get(AuthMiddleware.validateToken, UsersController.getLogin).post(UsersController.login);

router.route("/checkAuth").post(AuthMiddleware.validateToken, UsersController.checkAuth);

router.route("/verify").post(UsersController.verify);
// router.route("/:id").get(UsersController.getPost)

export default router;
