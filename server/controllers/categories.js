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

const pagination = async (req, res, next) => {
  // const listOfCategory = await Categories.findAll();
  // return res.status(200).json(listOfCategory);

  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  // const search = req.query.search_query || "";
  const offset = limit * (page);
  const totalRows = await Categories.count();

  // console.log("page:....", page)
  // console.log("limit:....", limit)
  // console.log("offset:....", offset)
  // console.log("totalRows:....", totalRows)
  // const totalRows = await User.count({
    // where: {
    //   [Op.or]: [
    //     {
    //       name: {
    //         [Op.like]: "%" + search + "%",
    //       },
    //     },
    //     {
    //       email: {
    //         [Op.like]: "%" + search + "%",
    //       },
    //     },
    //   ],
    // },
  // });
  const totalPage = Math.ceil(totalRows / limit);
  // console.log("totalPage:....", totalPage)
  const result = await Categories.findAll({
    // where: {
    //   [Op.or]: [
    //     {
    //       name: {
    //         [Op.like]: "%" + search + "%",
    //       },
    //     },
    //     {
    //       email: {
    //         [Op.like]: "%" + search + "%",
    //       },
    //     },
    //   ],
    // },
    offset: offset,
    limit: limit,
    order: [["id", "DESC"]],
  });
  // console.log("result:....", result)
  res.json({
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage,
  });
};

export default {
  getAllCategory,
  getCategoryId,
  postCreateCategory,
  patchCategoryId,
  deleteCategoryId,
  pagination,
};
