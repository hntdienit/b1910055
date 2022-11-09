import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Categories = sequelize.define(
  "Categories",
  {
    name: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default Categories;
