import Addresses from "./Addresses.js";
import CartItems from "./CartItems.js";
import Carts from "./Carts.js";
import Categories from "./Categories.js";
import Images from "./Images.js";
import OrderItems from "./OrderItems.js";
import Orders from "./Orders.js";
import OrderStatuses from "./OrderStatuses.js";
import PaymentMethods from "./PaymentMethods.js";
import PaymentTypes from "./PaymentTypes.js";
import ProductItems from "./ProductItems.js";
import Products from "./Products.js";
import Promotions from "./Promotions.js";
import Reviews from "./Reviews.js";
import ShippingMethods from "./ShippingMethods.js";
import "./StoreInformations.js";
import Users from "./Users.js";
import Wishlists from "./Wishlists.js";

const relationship = () => {
  /* Users x Addresses: Many to Many */
  Users.belongsToMany(Addresses, { through: "UserAddress", foreignKey: "userId" });
  Addresses.belongsToMany(Users, { through: "UserAddress", foreignKey: "addressId" });

  /* Addresses x Orders: One to Many */
  Addresses.hasMany(Orders, { foreignKey: "addressId" });
  Orders.belongsTo(Addresses, { foreignKey: "addressId" });

  /* Carts x CartItems: One to Many */
  Carts.hasMany(CartItems, { foreignKey: "cartId" });
  CartItems.belongsTo(Carts, { foreignKey: "cartId" });

  /* Categories x Products: One to Many */
  Categories.hasMany(Products, { foreignKey: "categoryId" });
  Products.belongsTo(Categories, { foreignKey: "categoryId" });

  /* Categories x Categories: One to Many */
  Categories.hasMany(Categories, { foreignKey: "parent" });
  Categories.belongsTo(Categories, { foreignKey: "parent" });

  /* OrderItems x Reviews: One to Many */
  OrderItems.hasMany(Reviews, { foreignKey: "orderItemId" });
  Reviews.belongsTo(OrderItems, { foreignKey: "orderItemId" });

  /* Orders x OrderItems: One to Many */
  Orders.hasMany(OrderItems, { foreignKey: "orderId" });
  OrderItems.belongsTo(Orders, { foreignKey: "orderId" });

  /* OrderStatuses x Orders: One to Many */
  OrderStatuses.hasMany(Orders, { foreignKey: "orderStatusId" });
  Orders.belongsTo(OrderStatuses, { foreignKey: "orderStatusId" });

  /* PaymentMethods x Orders: One to Many */
  PaymentMethods.hasMany(Orders, { foreignKey: "paymentMethodId" });
  Orders.belongsTo(PaymentMethods, { foreignKey: "paymentMethodId" });

  /* PaymentTypes x PaymentMethods: One to Many */
  PaymentTypes.hasMany(PaymentMethods, { foreignKey: "paymentTypeId" });
  PaymentMethods.belongsTo(PaymentTypes, { foreignKey: "paymentTypeId" });

  /* ProductItems x CartItems: One to Many */
  ProductItems.hasMany(CartItems, { foreignKey: "productItemId" });
  CartItems.belongsTo(ProductItems, { foreignKey: "productItemId" });

  /* ProductItems x Images: One to Many */
  ProductItems.hasMany(Images, { foreignKey: "productItemId" });
  Images.belongsTo(ProductItems, { foreignKey: "productItemId" });

  /* ProductItems x OrderItems: One to Many */
  ProductItems.hasMany(OrderItems, { foreignKey: "productItemId" });
  OrderItems.belongsTo(ProductItems, { foreignKey: "productItemId" });

  /* ProductItems x Wishlists: One to Many */
  ProductItems.hasMany(Wishlists, { foreignKey: "productItemId" });
  Wishlists.belongsTo(ProductItems, { foreignKey: "productItemId" });

  /* ProductItems x Promotions: Many to Many */
  ProductItems.belongsToMany(Promotions, { through: "ProductItemPromotion", foreignKey: "ProductItemId" });
  Promotions.belongsToMany(ProductItems, { through: "ProductItemPromotion", foreignKey: "promotionId" });

  /* Products x ProductItems: One to Many */
  Products.hasMany(ProductItems, { foreignKey: "productId" });
  ProductItems.belongsTo(Products, { foreignKey: "productId" });

  /* ShippingMethods x Orders: One to Many */
  ShippingMethods.hasMany(Orders, { foreignKey: "shippingMethodId" });
  Orders.belongsTo(ShippingMethods, { foreignKey: "shippingMethodId" });

  /* Users x PaymentMethods: One to Many */
  Users.hasMany(PaymentMethods, { foreignKey: "userId" });
  PaymentMethods.belongsTo(Users, { foreignKey: "userId" });

  /* Users x Reviews: One to Many */
  Users.hasMany(Reviews, { foreignKey: "userId" });
  Reviews.belongsTo(Users, { foreignKey: "userId" });

  /* Users x Carts: One to Many */
  Users.hasMany(Carts, { foreignKey: "userId" });
  Carts.belongsTo(Users, { foreignKey: "userId" });

  /* Users x Wishlists: One to Many */
  Users.hasMany(Wishlists, { foreignKey: "userId" });
  Wishlists.belongsTo(Users, { foreignKey: "userId" });

};

export default relationship;
