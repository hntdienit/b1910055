import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderItems = sequelize.define(
  "OrderItems",
  {
    quantity: { type: DataTypes.INTEGER, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default OrderItems;
