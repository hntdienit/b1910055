import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProductDetails = sequelize.define(
  "ProductDetails",
  {
    price: { type: DataTypes.INTEGER, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    size: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default ProductDetails;
