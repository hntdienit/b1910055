import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Users from "../models/Users.js";
import Carts from "../models/Carts.js"

const endCode = (id, username, role) => {
  return jwt.sign(
    {
      iss: "B1910055",
      sub: { id, username, role },
      iat: new Date().setTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    process.env.JWT_SECRET
  );
};

const checkAuth = async (req, res, next) => {
  return res.json({ role: req.user.role });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) return res.status(200).json({ error: "user doesn't exist!" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      return res.status(200).json({ error: "Wrong username and password!" });
    const accessToken = endCode(user.id, user.username, user.role);
    return res
      .status(200)
      .json({ accessToken: accessToken, username: user.username, useID: user.id, role: user.role });
  });
};

const getLogin = async (req, res, next) => {
  return res.status(201).json(req.user);
  // const accessToken = endCode(user.id, user.username, user.role);
  // return res
  //   .status(200)
  //   .json({ accessToken: accessToken, userRole: user.role });
};

const register = async (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    const newUser = await Users.create({
      username: username,
      password: hash,
    });
    await Carts.create({
      userId: newUser.id
    });
    return res.status(201).json("SUCCESS!");
  });

  //   return res.status(201).json(post);
};

export default {
  checkAuth,
  login,
  getLogin,
  register,
};
