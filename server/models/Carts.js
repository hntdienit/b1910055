import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Carts = sequelize.define(
  "Carts",
  {
  },
  {
    // Other model options go here
  }
);

export default Carts;
