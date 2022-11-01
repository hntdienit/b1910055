/* Models */
import Addresses from "./Addresses.js";
import CartItems from "./CartItems.js";
import Carts from "./Carts.js";
import Categories from "./Categories.js";
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
import VariationOptions from "./VariationOptions.js";
import Variations from "./Variations.js";
import Wishlists from "./Wishlists.js";

const relationship = () => {
  /* Users x Addresses: Many to Many */
  Users.belongsToMany(Addresses, { through: "UserAddress" });
  Addresses.belongsToMany(Users, { through: "UserAddress" });

  /* Addresses x Orders: One to Many */
  Addresses.hasMany(Orders);
  Orders.belongsTo(Addresses);

  /* Carts x CartItems: One to Many */
  Carts.hasMany(CartItems);
  CartItems.belongsTo(Carts);

  /* Categories x Products: One to Many */
  Categories.hasMany(Products);
  Products.belongsTo(Categories);

  /* Categories x Variations: One to Many */
  Categories.hasMany(Variations);
  Variations.belongsTo(Categories);

  /* Categories x Promotions: Many to Many */
  Categories.belongsToMany(Promotions, { through: "CategoryPromotion" });
  Promotions.belongsToMany(Categories, { through: "CategoryPromotion" });

  /* Categories x Categories: One to Many */
  Categories.hasMany(Categories, { foreignKey: 'parent'});
  Categories.belongsTo(Categories, { foreignKey: 'parent'});

  /* OrderItems x Reviews: One to Many */
  OrderItems.hasMany(Reviews);
  Reviews.belongsTo(OrderItems);

  /* Orders x OrderItems: One to Many */
  Orders.hasMany(OrderItems);
  OrderItems.belongsTo(Orders);

  /* OrderStatuses x Orders: One to Many */
  OrderStatuses.hasMany(Orders);
  Orders.belongsTo(OrderStatuses);

  /* PaymentMethods x Orders: One to Many */
  PaymentMethods.hasMany(Orders);
  Orders.belongsTo(PaymentMethods);

  /* PaymentTypes x PaymentMethods: One to Many */
  PaymentTypes.hasMany(PaymentMethods);
  PaymentMethods.belongsTo(PaymentTypes);

  /* ProductItems x CartItems: One to Many */
  ProductItems.hasMany(CartItems);
  CartItems.belongsTo(ProductItems);

  /* ProductItems x OrderItems: One to Many */
  ProductItems.hasMany(OrderItems);
  OrderItems.belongsTo(ProductItems);

  /* ProductItems x Wishlists: One to Many */
  ProductItems.hasMany(Wishlists);
  Wishlists.belongsTo(ProductItems);

    /* ProductItems x VariationOptions: Many to Many */
    ProductItems.belongsToMany(VariationOptions, { through: "ProductItemOption" });
    VariationOptions.belongsToMany(ProductItems, { through: "ProductItemOption" });

  /* Products x ProductItems: One to Many */
  Products.hasMany(ProductItems);
  ProductItems.belongsTo(Products);

  /* ShippingMethods x Orders: One to Many */
  ShippingMethods.hasMany(Orders);
  Orders.belongsTo(ShippingMethods);

  /* Users x PaymentMethods: One to Many */
  Users.hasMany(PaymentMethods);
  PaymentMethods.belongsTo(Users);

  /* Users x Reviews: One to Many */
  Users.hasMany(Reviews);
  Reviews.belongsTo(Users);

  /* Users x Carts: One to Many */
  Users.hasMany(Carts);
  Carts.belongsTo(Users);

  /* Users x Wishlists: One to Many */
  Users.hasMany(Wishlists);
  Wishlists.belongsTo(Users);

  /* Variations x VariationOptions: One to Many */
  Variations.hasMany(VariationOptions);
  VariationOptions.belongsTo(Variations);

};

export default relationship;
