import { Op } from "sequelize";
import Categories from "../models/Categories.js";
import Products from "../models/Products.js";
import ProductDetails from "../models/ProductDetails.js";
import Images from "../models/Images.js";
import Warehouses from "../models/Warehouses.js";
import WarehouseDetails from "../models/WarehouseDetails.js";
import fs from "fs";

const getNewProduct = async (req, res, next) => {
  const list = await Products.findAll({
    include: [
      { model: Categories },
      {
        model: ProductDetails,
        include: [
          {
            model: Images,
            required: false,
          },
        ],
      },
    ],
    limit: 22,
    order: [["createdAt", "DESC"]],
  });

  return res.status(200).json(list);
};

const getAllProductItem = async (req, res, next) => {
  const list = await ProductDetails.findAll({
    include: [
      {
        model: Products,
        required: false,
      },
    ],
  });

  return res.status(200).json(list);
};

const getProductDetail = async (req, res, next) => {
  const productid = req.params.productid;
  const product = await Products.findOne({
    where: {
      id: productid,
    },
    required: false,
    include: [
      { model: Categories },
      {
        model: ProductDetails,
        include: [
          {
            model: Images,
          },
          {
            model: WarehouseDetails,
          },
        ],
      },
    ],
  });
  // return res.status(200).json({error: "loi roi"});
  return res.status(200).json(product);
};

const getAll = async (req, res, next) => {
  const list = await Images.findAll({
    // where: {
    //   productItemId: 6
    // }
  });

  return res.status(200).json(list);
};

// const getAll = async (req, res, next) => {
//   const list = await VariationOptions.findAll();
//   return res.status(200).json(list);
// };
// const getItemId = async (req, res, next) => {
//   const itemId = req.params.Id;
//   const item = await VariationOptions.findByPk(itemId);
//   return res.status(200).json(item);
// };

const postCreateProduct = async (req, res, next) => {
  const name = req.body.name;
  const categoryId = req.body.categoryId;
  const description = req.body.description;
  const color = req.body.color;
  const size = req.body.size;
  const stock = req.body.stock;
  const price = req.body.price;
  const image = req.files;

  const newProduct = await Products.create({ name: name, description: description, categoryId: categoryId });
  const newProductDetail = await ProductDetails.create({
    productId: newProduct.id,
    color: color,
    size: size,
    price: price,
  });

  const warehouse = await Warehouses.findOne();

  const warehousedetail = await WarehouseDetails.create({
    // warehouseId:  warehouse.id,
    warehouseId: 2,
    productDetailId: newProductDetail.id,
    stock: stock,
  });

  for (let i = 0; i < image.length; i++) {
    const newProductDetailImage = await Images.create({
      productDetailId: newProductDetail.id,
      url: `${req.protocol}://${req.get("host")}/image/product/${req.files[i].filename}`,
    });
    // delete file
    // const filepath = `./public/image/product/${req.files[i].filename}`;
    // fs.unlinkSync(filepath);
  }

  return res.status(201).json();
};

// const patchItemId = async (req, res, next) => {
//   const itemId = req.params.Id;
//   const itemBody = req.body;
//   await VariationOptions.update(
//     { name: itemBody.name, variationId: itemBody.variationId },
//     {
//       where: {
//         id: itemId,
//       },
//     }
//   );
//   return res.status(201).json("sua thanh cong"); /* 123 */
// };
// const deleteItemId = async (req, res, next) => {
//   const itemId = req.params.Id;
//   await VariationOptions.destroy({
//     where: {
//       id: itemId,
//     },
//   });
//   return res.status(201).json("xoa thanh cong"); /* 123 */
// };
// const pagination = async (req, res, next) => {
//   const page = parseInt(req.query.page) || 0;
//   const limit = parseInt(req.query.limit) || 5;
//   const keyword = req.query.keyword || "";
//   const offset = limit * page;
//   const totalRows = await VariationOptions.count({
//     where: {
//       [Op.or]: [
//         {
//           name: {
//             [Op.like]: "%" + keyword + "%",
//           },
//         },
//       ],
//     },
//   });
//   const totalPage = Math.ceil(totalRows / limit);
//   const result = await VariationOptions.findAll({
//     where: {
//       [Op.or]: [
//         {
//           name: {
//             [Op.like]: "%" + keyword + "%",
//           },
//         },
//       ],
//     },
//     offset: offset,
//     limit: limit,
//     order: [["id", "DESC"]],
//     include: Variations,
//   });
//   res.json({
//     result: result,
//     page: page,
//     limit: limit,
//     totalRows: totalRows,
//     totalPage: totalPage,
//   });
// };
export default {
  getNewProduct,
  getAll,
  getAllProductItem,
  getProductDetail,
  // getItemId,
  postCreateProduct,
  // patchItemId,
  // deleteItemId,
  // pagination,
};
