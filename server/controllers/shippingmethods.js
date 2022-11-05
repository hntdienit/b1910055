import ShippingMethods from "../models/ShippingMethods.js";
import { Op } from "sequelize";

const getAll = async (req, res, next) => {
  const list = await ShippingMethods.findAll();
  return res.status(200).json(list);
};

const getId = async (req, res, next) => {
  const dataId = req.params.Id;
  const datafind = await ShippingMethods.findByPk(dataId);
  return res.status(200).json(datafind);
};

const postCreate = async (req, res, next) => {
  const data = req.body;
  await ShippingMethods.create(data);
  return res.status(201).json(data);
};

const patchId = async (req, res, next) => {
  const dataId = req.params.Id;
  const dataBody = req.body;
  await ShippingMethods.update(
    { name: dataBody.name, price: dataBody.price },
    {
      where: {
        id: dataId,
      },
    }
  );
  return res.status(201).json(dataBody);
};

const deleteId = async (req, res, next) => {
  const variationId = req.params.variationId;
  await ShippingMethods.destroy({
    where: {
      id: variationId,
    },
  });
  return res.status(201).json("xoa thanh cong"); /* 123 */
};

const pagination = async (req, res, next) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const keyword = req.query.keyword || "";
  const offset = limit * page;
  const totalRows = await ShippingMethods.count({
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
  const result = await ShippingMethods.findAll({
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
  getId,
  postCreate,
  patchId,
  deleteId,
  pagination,
};
