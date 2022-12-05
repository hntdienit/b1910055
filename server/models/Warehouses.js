import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Warehouses = sequelize.define(
  "Warehouses",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Warehouses;
