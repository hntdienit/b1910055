import { Op } from "sequelize";
import ImportBills from "../models/ImportBills.js";

const getAllImportBill = async (req, res, next) => {
  const listOfImportBill = await ImportBills.findAll();
  return res.status(200).json(listOfImportBill);
};

const getImportBillId = async (req, res, next) => {
  const importBillIdId = req.params.importBillIdId;
  const importBillId = await ImportBills.findByPk(importBillIdId);
  return res.status(200).json(importBillId);
};

const postCreateImportBill = async (req, res, next) => {
  const user = req.user
  const importBill = req.body;
  console.info(importBill)
  // await ImportBills.create({
  //   total: importBill.total,
  //   date: importBill.date,
  //   note: importBill.date,
  //   warehouseId: importBill.warehouseId,
  //   employeeId: user.id,
  // });
  return res.status(201).json(importBill);
};

const patchImportBillId = async (req, res, next) => {
  const importBillId = req.params.importBillIdId;
  const importBillBody = req.body;
  await ImportBills.update(
    { 
      name: importBillBody.name,
      address: importBillBody.address
    },
    {
      where: {
        id: importBillId,
      },
    }
  );
  return res.status(201).json("sua thanh cong"); /* 123 */
};

const deleteImportBillId = async (req, res, next) => {
  const importBillIdId = req.params.importBillIdId;
  await ImportBills.destroy({
    where: {
      id: importBillIdId,
    },
  });
  return res.status(201).json("xoa thanh cong"); /* 123 */
};

const pagination = async (req, res, next) => {
  // const listOfImportBill = await ImportBills.findAll();
  // return res.status(200).json(listOfImportBill);

  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.keyword || "";
  const offset = limit * (page);
  const totalRows = await ImportBills.count();

  const totalPage = Math.ceil(totalRows / limit);
  const result = await ImportBills.findAll({
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
  getAllImportBill,
  getImportBillId,
  postCreateImportBill,
  patchImportBillId,
  deleteImportBillId,
  pagination,
};
