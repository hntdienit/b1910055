import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Producers = sequelize.define(
  "Producers",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Producers;
