import User from "./model.js";
import config from "../../core/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

/////Create user/////
export const createUser = async (data) => {
    if (
      !data.password ||
      data.password.length < 6 ||
      data.password.length > 12
    )
      throw new Error("INVALID_PASSWORD");
    try {
      data.password = await bcrypt.hash(
        data.password,
        config.HASH_ROUNDS
      );
      const user = await User.create(data);
      return user;
    } catch (err) {
      throw new Error("INVALID_CREDENTIALS");
    }
  };