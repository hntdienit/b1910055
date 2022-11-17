// import Variations from "../models/Variations.js";
import Promotions from "../models/Promotions.js";
// import { Op } from "sequelize";

// const getAll = async (req, res, next) => {
//   const list = await Variations.findAll();
//   return res.status(200).json(list);
// };

// const getVariationId = async (req, res, next) => {
//   const variationId = req.params.variationId;
//   const variation = await Variations.findByPk(variationId);
//   return res.status(200).json(variation);
// };

const postCreatePromotion = async (req, res, next) => {
  const promotion = req.body;
  const newPromotion = await Promotions.create(promotion);
  return res.status(201).json(newPromotion);
};

// const patchVariationId = async (req, res, next) => {
//   const variationId = req.params.variationId;
//   const variationBody = req.body;
//   await Variations.update(
//     { name: variationBody.name, categoryId: variationBody.categoryId },
//     {
//       where: {
//         id: variationId,
//       },
//     }
//   );
//   return res.status(201).json("sua thanh cong"); /* 123 */
// };

// const deleteVariationId = async (req, res, next) => {
//   const variationId = req.params.variationId;
//   await Variations.destroy({
//     where: {
//       id: variationId,
//     },
//   });
//   return res.status(201).json("xoa thanh cong"); /* 123 */
// };

// const pagination = async (req, res, next) => {
//   const page = parseInt(req.query.page) || 0;
//   const limit = parseInt(req.query.limit) || 5;
//   const keyword = req.query.keyword || "";
//   const offset = limit * page;
//   // const totalRows = await Variations.count();
//   const totalRows = await Variations.count({
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
//   const result = await Variations.findAll({
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
//     include: Categories,
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
  //   getAll,
  //   getVariationId,
  postCreatePromotion,
  //   patchVariationId,
  //   deleteVariationId,
  //   pagination,
};
