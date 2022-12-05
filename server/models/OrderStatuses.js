import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderStatuses = sequelize.define(
  "OrderStatuses",
  {
    status: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default OrderStatuses;
