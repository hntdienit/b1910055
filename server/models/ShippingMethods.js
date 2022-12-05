import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ShippingMethods = sequelize.define(
  "ShippingMethods",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default ShippingMethods;
