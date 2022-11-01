import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const VariationOptions = sequelize.define(
  "VariationOptions",
  {
    name: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default VariationOptions;
