import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Orders = sequelize.define(
  "Orders",
  {
    orderdate: { type: DataTypes.DATE, allowNull: false },
    ordertotal: { type: DataTypes.INTEGER, allowNull: false },
    paymentstatus: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Orders;
