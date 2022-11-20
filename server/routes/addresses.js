import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import AddressController from "../controllers/addresses.js";

const router = express.Router();

router
  .route("/")
  .get(AuthMiddleware.validateToken, AddressController.getAddresses)
  .post(AuthMiddleware.validateToken, AddressController.postNewAddresses)

// router
//   .route("/:productitemid")
//   // .get(CategoryController.getCategoryId)
//   .patch(AuthMiddleware.validateToken, AddressController.patchProductItemId)
//   .delete(AuthMiddleware.validateToken, AddressController.deleteProductItemId);

// router.route("/").get(AuthMiddleware.validateToken, AddressController.getCartDetail);

// .post(AuthMiddleware.validateToken, CategoryController.postCreateCategory);

export default router;
