import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Promotions = sequelize.define(
  "Promotions",
  {
    name: { type: DataTypes.STRING, allowNull: true },
    discount: { type: DataTypes.STRING, allowNull: true },
    startdate: { type: DataTypes.DATE, allowNull: true },
    enddate: { type: DataTypes.DATE, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default Promotions;
