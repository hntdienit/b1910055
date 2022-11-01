import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Variations = sequelize.define(
  "Variations",
  {
    name: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default Variations;
