import VariationOptions from "../models/VariationOptions.js";
import Variations from "../models/Variations.js";
import Products from "../models/Products.js";
import ProductItems from "../models/ProductItems.js";
import { Op } from "sequelize";

// const getAll = async (req, res, next) => {
//   const list = await VariationOptions.findAll({
//     where: {
//       variationId: 2
//     }
//   });

//   return res.status(200).json(list);
// };

// const getAll = async (req, res, next) => {
//   const list = await VariationOptions.findAll();
//   return res.status(200).json(list);
// };
// const getItemId = async (req, res, next) => {
//   const itemId = req.params.Id;
//   const item = await VariationOptions.findByPk(itemId);
//   return res.status(200).json(item);
// };
const postCreateItem = async (req, res, next) => {
  const name = req.body.name;
  // const description = req.body.description;
  // const categoryId = req.body.categoryId;
  // const stock = req.body.stock;
  const image = req.files;
  console.log(" image moi", image.length)
  console.log(" name", req.body.name)
  // const color = req.body.color;
  // const size = req.body.size;
  // const price = req.body.price;
  // const newProduct = await Products.create({ name: name, description: description, categoryId: categoryId });
  const newProduct = await Products.create({name: name, categoryId: 1 });
  const newProductItem = await ProductItems.create({
    productId: newProduct.id,
    image: `image-${Date.now()}.${image[0].originalname}`,
    // color: color,
    // size: size,
    // stock: stock,
    // price: price,
  });
  return res.status(201).json({thu: image});
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
  // getAll,
  // getItemId,
  postCreateItem,
  // patchItemId,
  // deleteItemId,
  // pagination,
};
