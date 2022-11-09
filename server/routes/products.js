import express from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";

import ItemController from "../controllers/products.js";

const router = express.Router();

import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // callback(null, "./uploads");

    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// img storage confing
// const imgconfig = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, file, callback) => {
//     console.log("................", file.originalname)
//     callback(null, `image-${Date.now()}.${file.originalname}`);
//   },
// });
// // img filter
// const isImage = (req, file, callback) => {
//   if (file.mimetype.startsWith("image")) {
//     callback(null, true);
//   } else {
//     callback(null, Error("only image is allowd"));
//   }
// };

// const upload = multer({
//   storage: imgconfig,
//   fileFilter: isImage,
// });

// router
//   .route("/getAll")
//   .get(ItemController.getAll)
router
  .route("/")
  // .get(ItemController.pagination)
  .post(AuthMiddleware.validateToken, upload.array("image", 10),  ItemController.postCreateItem);
  // .post(AuthMiddleware.validateToken, ItemController.postCreateItem);

// router
//   .route("/:Id")
//   .get(ItemController.getItemId)
//   .patch(AuthMiddleware.validateToken, ItemController.patchItemId)
//   .delete(AuthMiddleware.validateToken, ItemController.deleteItemId);

export default router;
