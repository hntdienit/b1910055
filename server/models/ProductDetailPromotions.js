import sequelize from "../config/db.js";

const ProductDetailPromotions = sequelize.define(
  "ProductDetailPromotions",
  {},
  {
    // Other model options go here
  }
);

export default ProductDetailPromotions;
