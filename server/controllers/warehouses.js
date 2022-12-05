import { Op } from "sequelize";
import Warehouses from "../models/Warehouses.js";

const getAllWarehouse = async (req, res, next) => {
  const listOfWarehouse = await Warehouses.findAll();
  return res.status(200).json(listOfWarehouse);
};

const getWarehouseId = async (req, res, next) => {
  const warehouseId = req.params.warehouseId;
  const warehouse = await Warehouses.findByPk(warehouseId);
  return res.status(200).json(warehouse);
};

const postCreateWarehouse = async (req, res, next) => {
  const warehouse = req.body;
  await Warehouses.create(warehouse);
  return res.status(201).json(warehouse);
};

const patchWarehouseId = async (req, res, next) => {
  const warehouseId = req.params.warehouseId;
  const warehouseBody = req.body;
  await Warehouses.update(
    { 
      name: warehouseBody.name,
      address: warehouseBody.address
    },
    {
      where: {
        id: warehouseId,
      },
    }
  );
  return res.status(201).json("sua thanh cong"); /* 123 */
};

const deleteWarehouseId = async (req, res, next) => {
  const warehouseId = req.params.warehouseId;
  await Warehouses.destroy({
    where: {
      id: warehouseId,
    },
  });
  return res.status(201).json("xoa thanh cong"); /* 123 */
};

const pagination = async (req, res, next) => {
  // const listOfWarehouse = await Warehouses.findAll();
  // return res.status(200).json(listOfWarehouse);

  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.keyword || "";
  const offset = limit * (page);
  const totalRows = await Warehouses.count();

  const totalPage = Math.ceil(totalRows / limit);
  const result = await Warehouses.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          address: {
            [Op.like]: "%" + search + "%",
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
  getAllWarehouse,
  getWarehouseId,
  postCreateWarehouse,
  patchWarehouseId,
  deleteWarehouseId,
  pagination,
};
