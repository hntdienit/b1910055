import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderDetails = sequelize.define(
  "OrderDetails",
  {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default OrderDetails;
