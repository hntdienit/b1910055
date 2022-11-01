import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ShippingMethods = sequelize.define(
  "ShippingMethods",
  {
    name: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default ShippingMethods;
