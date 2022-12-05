import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import CartController from "../controllers/carts.js";

const router = express.Router();

router.route("/addproducttocart").post(AuthMiddleware.validateToken, CartController.postAddProductToCart);

router
  .route("/:productdetailid")
  // .get(CategoryController.getCategoryId)
  .patch(AuthMiddleware.validateToken, CartController.patchProductItemId)
  .delete(AuthMiddleware.validateToken, CartController.deleteProductItemId);

router.route("/").get(AuthMiddleware.validateToken, CartController.getCartDetail);

// .post(AuthMiddleware.validateToken, CategoryController.postCreateCategory);



export default router;
