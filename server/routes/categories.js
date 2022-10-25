import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import CategoryController from "../controllers/categories.js";

const router = express.Router();

router
  .route("/")
  .get(CategoryController.getAllCategory)
  .post(AuthMiddleware.validateToken, CategoryController.postCreateCategory);

router.route("/:categoryId").get(CategoryController.getCategoryId);

router
  .route("/:categoryId")
  .patch(AuthMiddleware.validateToken, CategoryController.patchCategoryId);

router
  .route("/:categoryId")
  .delete(AuthMiddleware.validateToken, CategoryController.deleteCategoryId);

export default router;
