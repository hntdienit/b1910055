import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import ImportBillController from "../controllers/importbills.js";

const router = express.Router();

router
  .route("/getall")
  .get(ImportBillController.getAllImportBill)
router
  .route("/")
  .get(ImportBillController.pagination)
  .post(AuthMiddleware.validateToken, ImportBillController.postCreateImportBill);

router
  .route("/:warehouseId")
  .get(ImportBillController.getImportBillId)
  .patch(AuthMiddleware.validateToken, ImportBillController.patchImportBillId)
  .delete(AuthMiddleware.validateToken, ImportBillController.deleteImportBillId);


export default router;
