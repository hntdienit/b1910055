import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProductItems = sequelize.define(
  "ProductItems",
  {
    stock: { type: DataTypes.INTEGER, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default ProductItems;
