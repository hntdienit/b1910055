import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PaymentTypes = sequelize.define(
  "PaymentTypes",
  {
    name: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default PaymentTypes;
