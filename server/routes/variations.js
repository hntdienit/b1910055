import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import VariationController from "../controllers/variations.js";

const router = express.Router();

router
  .route("/getAll")
  .get(VariationController.getAll)

  router
  .route("/")
  .get(VariationController.pagination)
  .post(AuthMiddleware.validateToken, VariationController.postCreateVariation);

router
  .route("/:variationId")
  .get(VariationController.getVariationId)
  .patch(AuthMiddleware.validateToken, VariationController.patchVariationId)
  .delete(AuthMiddleware.validateToken, VariationController.deleteVariationId);


export default router;
