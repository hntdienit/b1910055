// import Carts from "../models/Carts.js";
import CartDetails from "../models/CartDetails.js";
import ProductDetails from "../models/ProductDetails.js";
import Products from "../models/Products.js";
import Images from "../models/Images.js";

const getCartDetail = async (req, res, next) => {
  const user = req.user;
  const cart = await CartDetails.findAll({
    where: { userId: user.id },
    required: false,
    include: [
      {
        model: ProductDetails,
        include: [
          {
            model: Products,
          },
          {
            model: Images,
          },
        ],
      },
    ],
  });
  return res.status(200).json(cart);
};

const postAddProductToCart = async (req, res, next) => {
  const user = req.user;
  const productId = req.body.productId;
  const quantity = req.body.productQuantity;

  const newItem = await CartDetails.create({ quantity: quantity, userId: user.id, productDetailId: productId });

  return res.status(200).json();
};

const deleteProductItemId = async (req, res, next) => {
  const user = req.user;
  const productitemid = req.params.productdetailid;

  const userCart = await Carts.findOne({
    where: { userId: user.id },
  });

  await CartDetails.destroy({ where: { cartId: userCart.id, productItemId: productitemid } });
  return res.status(201).json();
};

const patchProductItemId = async (req, res, next) => {
  const user = req.user;
  const productdetailid = req.params.productitemid;
  const quantity = req.body.quantity;

  const productDetail = await ProductDetails.findByPk(productdetailid);

  if (quantity > productDetail.stock) {
    return res.status(200).json({ error: "The limited stock has been reached!" });
  }

  if (quantity <= 0) {
    await CartDetails.destroy({ where: { userId: user.id, productDetailId: productdetailid } });
    return res.status(201).json();
  }

  await CartDetails.update({ quantity: quantity }, { where: { userId: user.id, productDetailId: productdetailid } });
  return res.status(201).json();
};

const pagination = async (req, res, next) => {
  // const listOfCategory = await Categories.findAll();
  // return res.status(200).json(listOfCategory);

  // const page = parseInt(req.query.page) || 0;
  // const limit = parseInt(req.query.limit) || 5;
  // // const search = req.query.search_query || "";
  // const offset = limit * (page);
  // const totalRows = await Categories.count();

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
  // const totalPage = Math.ceil(totalRows / limit);
  // // console.log("totalPage:....", totalPage)
  // const result = await Categories.findAll({
  //   // where: {
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
  //   offset: offset,
  //   limit: limit,
  //   order: [["id", "DESC"]],
  // });
  // console.log("result:....", result)
  res.json({
    // result: result,
    // page: page,
    // limit: limit,
    // totalRows: totalRows,
    // totalPage: totalPage,
  });
};

export default {
  getCartDetail,
  postAddProductToCart,
  deleteProductItemId,
  patchProductItemId,

  // postCreateCategory,
  pagination,
};
