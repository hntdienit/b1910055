import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const WarehouseDetails = sequelize.define(
  "WarehouseDetails",
  {
    stock: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default WarehouseDetails;
