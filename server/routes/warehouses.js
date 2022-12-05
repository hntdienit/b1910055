import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import WarehouseController from "../controllers/warehouses.js";

const router = express.Router();

router
  .route("/getall")
  .get(WarehouseController.getAllWarehouse)
router
  .route("/")
  .get(WarehouseController.pagination)
  .post(AuthMiddleware.validateToken, WarehouseController.postCreateWarehouse);

router
  .route("/:warehouseId")
  .get(WarehouseController.getWarehouseId)
  .patch(AuthMiddleware.validateToken, WarehouseController.patchWarehouseId)
  .delete(AuthMiddleware.validateToken, WarehouseController.deleteWarehouseId);


export default router;
