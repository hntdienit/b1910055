import Variations from "../models/Variations.js";

// const getAllCategory = async (req, res, next) => {
//   const listOfCategory = await Categories.findAll();
//   return res.status(200).json(listOfCategory);
// };

const getVariationId = async (req, res, next) => {
  const variationId = req.params.variationId;
  const variation = await Variations.findByPk(variationId);
  return res.status(200).json(variation);
};

const postCreateVariation = async (req, res, next) => {
  const variation = req.body;
  await Variations.create(variation);
  return res.status(201).json(variation);
};

const patchVariationId = async (req, res, next) => {
  const variationId = req.params.variationId;
  const variationBody = req.body;
  await Variations.update(
    { name: variationBody.name },
    {
      where: {
        id: variationId,
      },
    }
  );
  return res.status(201).json("sua thanh cong"); /* 123 */
};

const deleteVariationId = async (req, res, next) => {
  const variationId = req.params.variationId;
  await Variations.destroy({
    where: {
      id: variationId,
    },
  });
  return res.status(201).json("xoa thanh cong"); /* 123 */
};

const pagination = async (req, res, next) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const offset = limit * (page);
  const totalRows = await Variations.count();
  const totalPage = Math.ceil(totalRows / limit);
  const result = await Variations.findAll({
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
  getVariationId,
  postCreateVariation,
  patchVariationId,
  deleteVariationId,
  pagination,
};
