import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import ItemController from "../controllers/variationoptions.js";

const router = express.Router();

router
  .route("/getAll")
  .get(ItemController.getAll)
router
  .route("/")
  .get(ItemController.pagination)
  .post(AuthMiddleware.validateToken, ItemController.postCreateItem);

router
  .route("/:Id")
  .get(ItemController.getItemId)
  .patch(AuthMiddleware.validateToken, ItemController.patchItemId)
  .delete(AuthMiddleware.validateToken, ItemController.deleteItemId);


export default router;
