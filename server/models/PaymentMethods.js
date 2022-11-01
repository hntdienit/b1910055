import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PaymentMethods = sequelize.define(
  "PaymentMethods",
  {
    name: { type: DataTypes.STRING, allowNull: true },
    isdefault: { type: DataTypes.BOOLEAN },
  },
  {
    // Other model options go here
  }
);

export default PaymentMethods;
