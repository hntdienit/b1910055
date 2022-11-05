import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import ShippingMethodsController from "../controllers/shippingmethods.js";

const router = express.Router();

router
  .route("/getall")
  .get(ShippingMethodsController.getAll)

router
  .route("/")
  .get(ShippingMethodsController.pagination)
  .post(AuthMiddleware.validateToken, ShippingMethodsController.postCreate);

router
  .route("/:Id")
  .get(ShippingMethodsController.getId)
  .patch(AuthMiddleware.validateToken, ShippingMethodsController.patchId)
  .delete(AuthMiddleware.validateToken, ShippingMethodsController.deleteId);


export default router;
