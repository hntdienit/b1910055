import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import CategoryController from "../controllers/categories.js";

const router = express.Router();

router
  .route("/getall")
  .get(CategoryController.getAllCategory)
router
  .route("/")
  // .get(CategoryController.getAllCategory)
  .get(CategoryController.pagination)
  .post(AuthMiddleware.validateToken, CategoryController.postCreateCategory);

router
  .route("/:categoryId")
  .get(CategoryController.getCategoryId)
  .patch(AuthMiddleware.validateToken, CategoryController.patchCategoryId)
  .delete(AuthMiddleware.validateToken, CategoryController.deleteCategoryId);


export default router;
