import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const StoreInformations = sequelize.define(
  "StoreInformations",
  {
    logo: { type: DataTypes.STRING, allowNull: true },
    name: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    introduce: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default StoreInformations;
