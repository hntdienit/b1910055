import sequelize from "../config/db.js";
import { Op } from "sequelize";

import Orders from "../models/Orders.js";
import OrderDetails from "../models/OrderDetails.js";
// import Carts from "../models/Carts.js";
import CartDetails from "../models/CartDetails.js";
import ProductDetails from "../models/ProductDetails.js";
import Products from "../models/Products.js";

const getCheckout = async (req, res, next) => {
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
        ],
      },
    ],
  });

  return res.status(200).json(cart);
};

const postCheckout = async (req, res, next) => {
  const user = req.user;

  const userOrder = await Orders.create({
    orderdate: Date.now(),
    ordertotal: 1000,
    addressId: 1,
    orderStatusId: 1,
    paymentMethodId: 1,
    shippingMethodId: 1,
    userId: 3,
  });

  // const userCart = await Carts.findOne({
  //   where: { userId: user.id },
  //   required: false,
  // });

  const userCartItem = await CartDetails.findAll({
    where: { cartId: userCart.id },
    required: false,
    include: [{ model: ProductDetails }],
  });

  userCartItem.map(async (item) => {
    await OrderDetails.create({
      quantity: item.quantity,
      price: item.ProductItem.price,
      orderId: userOrder.id,
      productItemId: item.productItemId,
    });
    await CartDetails.destroy({ where: { id: item.id } });
  });

  return res.status(200).json(userCartItem);
};

const getCartMiniOrder = async (req, res, next) => {
  const date = new Date();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  let preM = m - 1;
  let preY = y;

  if (m === 1) {
    preY = preY - 1;
    preM = 12;
  }

  const preGrowth = await Orders.findAll({
    where: {
      [Op.and]: [
        sequelize.where(sequelize.fn("month", sequelize.col("orderdate")), preM),
        sequelize.where(sequelize.fn("YEAR", sequelize.col("orderdate")), preY),
      ],
    },
  });

  const newGrowth = await Orders.findAll({
    where: {
      [Op.and]: [
        sequelize.where(sequelize.fn("month", sequelize.col("orderdate")), m),
        sequelize.where(sequelize.fn("YEAR", sequelize.col("orderdate")), y),
      ],
    },
  });
  
  let growth = 100;

  if(preGrowth.length !== 0){
    growth = (newGrowth.length - preGrowth.length) / preGrowth.length * 100;
  }

  return res.status(200).json({ newGrowth: newGrowth.length, growth: growth.toFixed(2) });
};

const postAddProductItemToCart = async (req, res, next) => {
  // const user = req.user;
  // const productItemId = req.body.productItemId;
  // const quantity = req.body.productQuantity;

  // const userCart = await Carts.findOne({
  //   where: { userId: user.id },
  // });

  // const newItem = await CartDetails.create({ quantity: quantity, cartId: userCart.id, productItemId: productItemId });

  return res.status(200).json();
};

const deleteProductItemId = async (req, res, next) => {
  // const user = req.user;
  // const productitemid = req.params.productitemid;

  // const userCart = await Carts.findOne({
  //   where: { userId: user.id },
  // });

  // await CartDetails.destroy({ where: { cartId: userCart.id, productItemId: productitemid } });
  return res.status(201).json();
};

const patchProductItemId = async (req, res, next) => {
  // const user = req.user;
  // const productitemid = req.params.productitemid;
  // const quantity = req.body.quantity;

  // const userCart = await Carts.findOne({
  //   where: { userId: user.id },
  // });

  // const productItem = await ProductDetails.findByPk(productitemid);

  // if (quantity > productItem.stock) {
  //   return res.status(200).json({ error: "The limited stock has been reached!" });
  // }

  // if (quantity <= 0) {
  //   await CartDetails.destroy({ where: { cartId: userCart.id, productItemId: productitemid } });
  //   return res.status(201).json();
  // }

  // await CartDetails.update({ quantity: quantity }, { where: { cartId: userCart.id, productItemId: productitemid } });
  return res.status(201).json();
};

export default {
  // getCartDetail,
  postAddProductItemToCart,
  deleteProductItemId,
  patchProductItemId,
  getCartMiniOrder,

  getCheckout,
  postCheckout,
};
