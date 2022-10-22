import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Likes = sequelize.define(
  "Likes",
  {
    /* model */
  },
  {
    /* Other model options go here */
  }
);

export default Likes;
