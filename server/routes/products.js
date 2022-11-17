import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import UploadMiddleware from "../middlewares/UploadMiddleware.js";

import ProductController from "../controllers/products.js";

const router = express.Router();

router
  .route("/")
  // .get(ItemController.pagination)
  .get(ProductController.getAll)
  // .post(AuthMiddleware.validateToken, upload.array("image", 10), ProductController.postCreateProduct);
  .post(
    AuthMiddleware.validateToken,
    function (req, res, next) {
      req.storage = "./public/image/product";
      next();
    },
    UploadMiddleware.array("image", 10),
    ProductController.postCreateProduct
  );

router.route("/newproduct").get(ProductController.getNewProduct);

// router
//   .route("/:Id")
//   .get(ItemController.getItemId)
//   .patch(AuthMiddleware.validateToken, ItemController.patchItemId)
//   .delete(AuthMiddleware.validateToken, ItemController.deleteItemId);

export default router;
