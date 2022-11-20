import sequelize from "../config/db.js";

const UserAddresses = sequelize.define(
  "UserAddresses",
  {},
  {
    // Other model options go here
  }
);

export default UserAddresses;
