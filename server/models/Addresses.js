import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Addresses = sequelize.define(
  "Addresses",
  {
    address: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Addresses;
