import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Users = sequelize.define(
  "Users",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
  }
);

export default Users;
