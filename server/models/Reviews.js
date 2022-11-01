import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Reviews = sequelize.define(
  "Reviews",
  {
    content: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    star: { type: DataTypes.INTEGER, allowNull: true }, 
  },
  {
    // Other model options go here
  }
);

export default Reviews;
