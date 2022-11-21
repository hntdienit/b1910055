import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import OrderController from "../controllers/orders.js";

const router = express.Router();

router.route("/neworder").post(AuthMiddleware.validateToken, OrderController.postAddProductItemToCart);

router
  .route("/cartminiorder")
  .get(AuthMiddleware.validateToken, OrderController.getCartMiniOrder)
  // .patch(AuthMiddleware.validateToken, CartController.patchProductItemId)
  // .delete(AuthMiddleware.validateToken, CartController.deleteProductItemId);

router
  .route("/checkout")
  .get(AuthMiddleware.validateToken, OrderController.getCheckout)
  .post(AuthMiddleware.validateToken, OrderController.postCheckout);

// router.route("/").get(AuthMiddleware.validateToken, CartController.getCartDetail);

// .post(AuthMiddleware.validateToken, CategoryController.postCreateCategory);

export default router;
