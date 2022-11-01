import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CartItems = sequelize.define(
  "CartItems",
  {
    quantity: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default CartItems;
