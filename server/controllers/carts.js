import Carts from "../models/Carts.js";
import CartItems from "../models/CartItems.js";
import ProductItems from "../models/ProductItems.js";
import Products from "../models/Products.js";
import Images from "../models/Images.js";

const getCartDetail = async (req, res, next) => {
  const user = req.user;
  const cart = await Carts.findOne({
    where: { userId: user.id },
    required: false,
    include: [
      {
        model: CartItems,
        include: [
          {
            model: ProductItems,
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
      },
    ],
  });
  return res.status(200).json(cart);
};

const postAddProductItemToCart = async (req, res, next) => {
  const user = req.user;
  const productItemId = req.body.productItemId;
  const quantity = req.body.productQuantity;

  const userCart = await Carts.findOne({
    where: { userId: user.id },
  });

  const newItem = await CartItems.create({ quantity: quantity, cartId: userCart.id, productItemId: productItemId });

  return res.status(200).json();
};

const deleteProductItemId = async (req, res, next) => {
  const user = req.user;
  const productitemid = req.params.productitemid;

  const userCart = await Carts.findOne({
    where: { userId: user.id },
  });

  await CartItems.destroy({ where: { cartId: userCart.id, productItemId: productitemid } });
  return res.status(201).json();
};

const patchProductItemId = async (req, res, next) => {
  const user = req.user;
  const productitemid = req.params.productitemid;
  const quantity = req.body.quantity;

  const userCart = await Carts.findOne({
    where: { userId: user.id },
  });

  const productItem = await ProductItems.findByPk(productitemid)

  if(quantity > productItem.stock){
    return res.status(200).json({ error: "The limited stock has been reached!"})
  }

  if(quantity <= 0){
    return res.status(200).json({ error: "Product quantity must be greater than or equal to 1!"})
  }

  await CartItems.update({ quantity: quantity }, { where: { cartId: userCart.id, productItemId: productitemid } });
  return res.status(201).json();
};

const postCreateCategory = async (req, res, next) => {
  // const category = req.body;
  // await Categories.create(category);
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
  postAddProductItemToCart,
  deleteProductItemId,
  patchProductItemId,

  postCreateCategory,
  pagination,
};
