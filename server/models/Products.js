import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Products = sequelize.define(
  "Products",
  {
    name: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default Products;
