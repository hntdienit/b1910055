import { Op } from "sequelize";
// import VariationOptions from "../models/VariationOptions.js";
// import Variations from "../models/Variations.js";
import Categories from "../models/Categories.js";
import Products from "../models/Products.js";
import ProductItems from "../models/ProductItems.js";
import Images from "../models/Images.js";
import fs from "fs";

const getNewProduct = async (req, res, next) => {
  const list = await Products.findAll({
    include: [
      { model: Categories },
      {
        model: ProductItems,
        include: [
          {
            model: Images,
            // where: {
            //   productItemId: 24
            // order: ["title", "DESC"],
            // },
            required: false,
          }
        ],
      },
    ],
    limit: 22,
    order: [["createdAt", "DESC"]],
  });

  return res.status(200).json(list);
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
  const newProductItem = await ProductItems.create({
    productId: newProduct.id,
    color: color,
    size: size,
    stock: stock,
    price: price,
  });
  for (let i = 0; i < image.length; i++) {
    const newProductItemImage = await Images.create({
      productItemId: newProductItem.id,
      url: `${req.protocol}://${req.get("host")}/image/product/${req.files[i].filename}`,
    });
    // delete file
    // const filepath = `./public/image/product/${req.files[i].filename}`;
    // fs.unlinkSync(filepath);
  }

  return res.status(201).json({ hinh: image[0] }); /* 123 */
};

const postCreateItem = async (req, res, next) => {
  try {
    console.log(req.files[0].filename);

    // if (req.file == undefined) {
    //   return res.send(`You must select a file.`);
    // }

    // Image.create({
    //   type: req.file.mimetype,
    //   name: req.file.originalname,
    //   data: fs.readFileSync(
    //     __basedir + "./public/" + req.file.filename
    //   ),
    // }).then((image) => {
    //   fs.writeFileSync(
    //     __basedir + "/resources/static/assets/tmp/" + image.name,
    //     image.data
    //   );

    //   return res.send(`File has been uploaded.`);
    // });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
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
  // getItemId,
  postCreateProduct,
  postCreateItem,
  // patchItemId,
  // deleteItemId,
  // pagination,
};
