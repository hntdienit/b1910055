import VariationOptions from "../models/VariationOptions.js"
import Variations from "../models/Variations.js";
import { Op } from "sequelize";
const getAll = async (req, res, next) => {
  const list = await VariationOptions.findAll();
  return res.status(200).json(list);
};
const getItemId = async (req, res, next) => {
  const itemId = req.params.Id;
  const item = await VariationOptions.findByPk(itemId);
  return res.status(200).json(item);
};
const postCreateItem = async (req, res, next) => {
  const item = req.body;
  await VariationOptions.create(item);
  return res.status(201).json(item);
};
const patchItemId = async (req, res, next) => {
  const itemId = req.params.Id;
  const itemBody = req.body;
  await VariationOptions.update(
    { name: itemBody.name, variationId: itemBody.variationId },
    {
      where: {
        id: itemId,
      },
    }
  );
  return res.status(201).json("sua thanh cong"); /* 123 */
};
const deleteItemId = async (req, res, next) => {
  const itemId = req.params.Id;
  await VariationOptions.destroy({
    where: {
      id: itemId,
    },
  });
  return res.status(201).json("xoa thanh cong"); /* 123 */
};
const pagination = async (req, res, next) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const keyword = req.query.keyword || "";
  const offset = limit * page;
  const totalRows = await VariationOptions.count({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: "%" + keyword + "%",
          },
        },
      ],
    },
  });
  const totalPage = Math.ceil(totalRows / limit);
  const result = await VariationOptions.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: "%" + keyword + "%",
          },
        },
      ],
    },
    offset: offset,
    limit: limit,
    order: [["id", "DESC"]],
    include: Variations,
  });
  res.json({
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage,
  });
};
export default {
  getAll,
  getItemId,
  postCreateItem,
  patchItemId,
  deleteItemId,
  pagination,
};
