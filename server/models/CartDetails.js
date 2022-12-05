import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CartDetails = sequelize.define(
  "CartDetails",
  {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default CartDetails;
