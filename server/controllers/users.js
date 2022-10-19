import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Users from "../models/Users.js";

const endCode = (userID) => {
  return jwt.sign(
    {
      iss: "B1910055",
      sub: userID,
      iat: new Date().setTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    process.env.JWT_SECRET
  );
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!user) return res.status(200).json({ error: "user doesn't exist!" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      return res.status(200).json({ error: "Wrong username and password!" });
    const accessToken = endCode(user.id);
    return res.status(200).json(accessToken);
  });
};

const register = async (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    await Users.create({
      username: username,
      password: hash,
    });
    return res.status(201).json("SUCCESS!");
  });

  //   return res.status(201).json(post);
};

export default {
  login,
  register,
};
