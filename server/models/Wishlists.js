import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Wishlists = sequelize.define(
  "Wishlists",
  {
  },
  {
    // Other model options go here
  }
);

export default Wishlists;
