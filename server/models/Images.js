import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Images = sequelize.define(
  "Images",
  {
    url: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Images;
