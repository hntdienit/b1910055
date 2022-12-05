import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ImportBills = sequelize.define(
  "ImportBills",
  {
    total: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    note: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default ImportBills;
