import Character from "./model.js";
import { Request, Response } from "express";

/////Create character/////
export const createChara = async (data) => {
    if (
      !data.name || data.name == ''
    )
      throw new Error("INVALID_NAME");
    try {
        if(data.class == "WARRIOR"){
            data.turnsLeft = 20;
        }
        if(data.class == "EXPLORER"){
            data.items = ["Map"];
        }
      const character = await Character.create(data);
      return character;
    } catch (err) {
      throw new Error("INVALID_CREDENTIALS");
    }
  };