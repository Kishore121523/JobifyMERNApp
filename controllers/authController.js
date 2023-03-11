import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  // try catch blocks are not needed since we used express-async-errors package in server.js
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("Login user");
};

const updateUser = async (req, res) => {
  res.send("UpdateUser user");
};

export { register, login, updateUser };
