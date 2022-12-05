import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Promotions = sequelize.define(
  "Promotions",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    discount: { type: DataTypes.INTEGER, allowNull: false },
    startdate: { type: DataTypes.DATE, allowNull: false },
    enddate: { type: DataTypes.DATE, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Promotions;
