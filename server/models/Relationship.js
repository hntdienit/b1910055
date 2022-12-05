import Addresses from "./Addresses.js";
import CartDetails from "./CartDetails.js";
import Categories from "./Categories.js";
import Images from "./Images.js";
import ImportBillDetails from "./ImportBillDetails.js";
import ImportBills from "./ImportBills.js";
import OrderDetails from "./OrderDetails.js";
import Orders from "./Orders.js";
import OrderStatuses from "./OrderStatuses.js";
import PaymentMethods from "./PaymentMethods.js";
import PaymentTypes from "./PaymentTypes.js";
import Producers from "./Producers.js";
import ProductDetails from "./ProductDetails.js";
import Products from "./Products.js";
import Promotions from "./Promotions.js";
import Reviews from "./Reviews.js";
import ShippingMethods from "./ShippingMethods.js";
import "./StoreInformations.js";
import Users from "./Users.js";
import WarehouseDetails from "./WarehouseDetails.js";
import Warehouses from "./Warehouses.js";
import Wishlists from "./Wishlists.js";

const relationship = () => {
  /* Users x Addresses: Many to Many */
  Users.belongsToMany(Addresses, { through: "UserAddresses", foreignKey: "userId" });
  Addresses.belongsToMany(Users, { through: "UserAddresses", foreignKey: "addressId" });

  /* Users x CartDetails: One to Many */
  Users.hasMany(CartDetails, { foreignKey: "userId" });
  CartDetails.belongsTo(Users, { foreignKey: "userId" });

  /* Addresses x Orders: One to Many */
  Addresses.hasMany(Orders, { foreignKey: "addressId" });
  Orders.belongsTo(Addresses, { foreignKey: "addressId" });

  /* Categories x Products: One to Many */
  Categories.hasMany(Products, { foreignKey: "categoryId" });
  Products.belongsTo(Categories, { foreignKey: "categoryId" });

  /* Categories x Categories: One to Many */
  Categories.hasMany(Categories, { foreignKey: "parent" });
  Categories.belongsTo(Categories, { foreignKey: "parent" });

  /* Orders x OrderDetails: One to Many */
  Orders.hasMany(OrderDetails, { foreignKey: "orderId" });
  OrderDetails.belongsTo(Orders, { foreignKey: "orderId" });

  /* OrderStatuses x Orders: One to Many */
  OrderStatuses.hasMany(Orders, { foreignKey: "orderStatusId" });
  Orders.belongsTo(OrderStatuses, { foreignKey: "orderStatusId" });

  /* PaymentMethods x Orders: One to Many */
  PaymentMethods.hasMany(Orders, { foreignKey: "paymentMethodId" });
  Orders.belongsTo(PaymentMethods, { foreignKey: "paymentMethodId" });

  /* PaymentTypes x PaymentMethods: One to Many */
  PaymentTypes.hasMany(PaymentMethods, { foreignKey: "paymentTypeId" });
  PaymentMethods.belongsTo(PaymentTypes, { foreignKey: "paymentTypeId" });

  /* ProductDetails x CartDetails: One to Many */
  ProductDetails.hasMany(CartDetails, { foreignKey: "productDetailId" });
  CartDetails.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* ProductDetails x Reviews: One to Many */
  ProductDetails.hasMany(Reviews, { foreignKey: "productDetailId" });
  Reviews.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* ProductDetails x Images: One to Many */
  ProductDetails.hasMany(Images, { foreignKey: "productDetailId" });
  Images.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* ProductDetails x OrderDetails: One to Many */
  ProductDetails.hasMany(OrderDetails, { foreignKey: "productDetailId" });
  OrderDetails.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* ProductDetails x Wishlists: One to Many */
  ProductDetails.hasMany(Wishlists, { foreignKey: "productDetailId" });
  Wishlists.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* ProductDetails x Promotions: Many to Many */
  ProductDetails.belongsToMany(Promotions, { through: "productDetailPromotions", foreignKey: "productDetailId" });
  Promotions.belongsToMany(ProductDetails, { through: "productDetailPromotions", foreignKey: "promotionId" });

    /* Users x Promotions: one to Many */
    Users.hasMany(Promotions, { foreignKey: "employeeId" });
    Promotions.belongsTo(Users, { foreignKey: "employeeId" });

  /* Products x ProductDetails: One to Many */
  Products.hasMany(ProductDetails, { foreignKey: "productId" });
  ProductDetails.belongsTo(Products, { foreignKey: "productId" });

  /* ShippingMethods x Orders: One to Many */
  ShippingMethods.hasMany(Orders, { foreignKey: "shippingMethodId" });
  Orders.belongsTo(ShippingMethods, { foreignKey: "shippingMethodId" });

  /* Users x Orders: One to Many */
  Users.hasMany(Orders, { foreignKey: "userId" });
  Orders.belongsTo(Users, { foreignKey: "userId" });

  /* Users x Orders: One to Many */
  Users.hasMany(Orders, { foreignKey: "employeeId" });
  Orders.belongsTo(Users, { foreignKey: "employeeId" });

  /* Users x PaymentMethods: One to Many */
  Users.hasMany(PaymentMethods, { foreignKey: "userId" });
  PaymentMethods.belongsTo(Users, { foreignKey: "userId" });

  /* Users x Reviews: One to Many */
  Users.hasMany(Reviews, { foreignKey: "userId" });
  Reviews.belongsTo(Users, { foreignKey: "userId" });

  /* Users x Wishlists: One to Many */
  Users.hasMany(Wishlists, { foreignKey: "userId" });
  Wishlists.belongsTo(Users, { foreignKey: "userId" });

  /* Users x ImportBills: One to Many */
  Users.hasMany(ImportBills, { foreignKey: "employeeId" });
  ImportBills.belongsTo(Users, { foreignKey: "employeeId" });

  /* ImportBills x ImportBillDetails: One to Many */
  ImportBills.hasMany(ImportBillDetails, { foreignKey: "importBillId" });
  ImportBillDetails.belongsTo(ImportBills, { foreignKey: "importBillId" });

  /* ProductDetails x ImportBillDetails: One to Many */
  ProductDetails.hasMany(ImportBillDetails, { foreignKey: "productDetailId" });
  ImportBillDetails.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* Warehouses x WarehouseDetails: One to Many */
  Warehouses.hasMany(WarehouseDetails, { foreignKey: "warehouseId" });
  WarehouseDetails.belongsTo(Warehouses, { foreignKey: "warehouseId" });

  /* Warehouses x ImportBills: One to Many */
  Warehouses.hasMany(ImportBills, { foreignKey: "warehouseId" });
  ImportBills.belongsTo(Warehouses, { foreignKey: "warehouseId" });

  /* ProductDetails x WarehouseDetails: One to Many */
  ProductDetails.hasMany(WarehouseDetails, { foreignKey: "productDetailId" });
  WarehouseDetails.belongsTo(ProductDetails, { foreignKey: "productDetailId" });

  /* Producers x ProductDetails: One to Many */
  Producers.hasMany(ProductDetails, { foreignKey: "producerId" });
  ProductDetails.belongsTo(Producers, { foreignKey: "producerId" });
};

export default relationship;
