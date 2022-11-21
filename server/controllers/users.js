import sequelize from "../config/db.js";
import { Op } from "sequelize";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mailer from "../utils/mailer.js";
import emailExistence from "email-existence";

import Users from "../models/Users.js";
import Carts from "../models/Carts.js";

const setTimeOutOTP = (userId) => {
  setTimeout(async function () {
    await Users.update({ emailverified: 0 }, { where: { id: userId } });
  }, 1 * 60 * 1000);
};

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
    if (!match) return res.status(200).json({ error: "Wrong username and password!" });
    const accessToken = endCode(user.id, user.username, user.role);
    return res.status(200).json({ accessToken: accessToken, username: user.username, useID: user.id, role: user.role });
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
  const { username, email, password } = req.body;
  console.log(username + " " + email + " " + password);
  bcrypt.hash(password, 10).then(async (hash) => {
    const newUser = await Users.create({
      username: username,
      email: email,
      password: hash,
      emailverified: Math.floor(Math.random() * (999999 - 100000)) + 100000,
    });
    emailExistence.check(newUser.email, function (error, response) {
      const mailcheck = response;
      console.log("mailcheck", mailcheck);
      if (mailcheck === true) {
        mailer(
          newUser.email,
          "Verify Email",
          `<div style="text-align: center">
            <div>
              <img src="${process.env.IMAGE_MAIL}" width="100px" height="100px" />
            </div>
            <h2>Confirm email for account!</h2>
            <p>Hello <span style="color: #00aff0">${newUser.username}!</span></p>
            <p>You just signed up for an account</p>
            <h2>Your account verification code : <span style="color: #00aff0">${newUser.emailverified}</span></h2>
          </div>`
        );
        Carts.create({ userId: newUser.id });
        setTimeOutOTP(newUser.id);
        return res.status(201).json({ verify: "verify", username: newUser.username });
      } else {
        Users.destroy({ where: { username: newUser.username } });
        return res.json({ error: "Email does not exist!" });
      }
    });
  });
};

const verify = async (req, res, next) => {
  const username = req.body.username;
  const verifycode = req.body.verifycode;
  const user = await Users.findOne({
    where: {
      username: username,
    },
  });

  if (parseInt(verifycode) === parseInt(user.emailverified)) {
    await Users.update({ emailverified: 1 }, { where: { username: username } });
    return res.json();
  } else {
    if (parseInt(user.emailverified) === 0) {
      return res.json({
        error:
          "Your account verification code has expired, please choose to send again account verification code to receive a new code",
      });
    } else {
      return res.json({ error: "Incorrect account verification code" });
    }
  }
};

const getCartMiniUser= async (req, res, next) => {
  const date = new Date();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  let preM = m - 1;
  let preY = y;

  if (m === 1) {
    preY = preY - 1;
    preM = 12;
  }

  const preGrowth = await Users.findAll({
    where: {
      [Op.and]: [
        sequelize.where(sequelize.fn("month", sequelize.col("createdAt")), preM),
        sequelize.where(sequelize.fn("YEAR", sequelize.col("createdAt")), preY),
      ],
    },
  });

  const newGrowth  = await Users.findAll({
    where: {
      [Op.and]: [
        sequelize.where(sequelize.fn("month", sequelize.col("createdAt")), m),
        sequelize.where(sequelize.fn("YEAR", sequelize.col("createdAt")), y),
      ],
    },
  });
  
  let growth = 100;

  if(preGrowth .length !== 0){
    growth = (newGrowth .length - preGrowth .length) / preGrowth .length * 100;
  }

  return res.status(200).json({ newGrowth : newGrowth .length, growth: growth.toFixed(2) });
};

export default {
  checkAuth,
  login,
  getLogin,
  register,
  verify,
  getCartMiniUser,
};
