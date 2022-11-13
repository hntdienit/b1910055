import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProductItems = sequelize.define(
  "ProductItems",
  {
    stock: { type: DataTypes.INTEGER, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
    color: { type: DataTypes.STRING, allowNull: true },
    size: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default ProductItems;
