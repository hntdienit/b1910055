import Categories from "../models/Categories.js";

const getAllCategory = async (req, res, next) => {
  const listOfCategory = await Categories.findAll();
  return res.status(200).json(listOfCategory);
};

const getCategoryId = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  const category = await Categories.findByPk(categoryId);
  return res.status(200).json(category);
};

const postCreateCategory = async (req, res, next) => {
  const category = req.body;
  await Categories.create(category);
  return res.status(201).json(category);
};

const patchCategoryId = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  const categoryBody = req.body;
  await Categories.update(
    { name: categoryBody.name },
    {
      where: {
        id: categoryId,
      },
    }
  );
  return res.status(201).json("sua thanh cong"); /* 123 */
};

const deleteCategoryId = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  await Categories.destroy({
    where: {
      id: categoryId,
    },
  });
  return res.status(201).json("xoa thanh cong"); /* 123 */
};

export default {
  getAllCategory,
  getCategoryId,
  postCreateCategory,
  patchCategoryId,
  deleteCategoryId,
};
