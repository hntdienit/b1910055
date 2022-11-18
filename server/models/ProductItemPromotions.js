import sequelize from "../config/db.js";

const ProductItemPromotions = sequelize.define(
  "ProductItemPromotions",
  {},
  {
    // Other model options go here
  }
);

export default ProductItemPromotions;
