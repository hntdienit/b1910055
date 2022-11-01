import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Orders = sequelize.define(
  "Orders",
  {
    orderdate: { type: DataTypes.DATE, allowNull: true },
    ordertotal: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default Orders;
