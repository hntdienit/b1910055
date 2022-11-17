import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import PromotionsController from "../controllers/promotions.js";

const router = express.Router();

// router
//   .route("/getAll")
//   .get(VariationController.getAll)

  router
  .route("/")
//   .get(VariationController.pagination)
  .post(AuthMiddleware.validateToken, PromotionsController.postCreatePromotion);

// router
//   .route("/:variationId")
//   .get(VariationController.getVariationId)
//   .patch(AuthMiddleware.validateToken, VariationController.patchVariationId)
//   .delete(AuthMiddleware.validateToken, VariationController.deleteVariationId);


export default router;
