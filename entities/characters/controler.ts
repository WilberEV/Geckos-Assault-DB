import { idText } from "typescript";
import Character from "./model.js";
import { Request, Response } from "express";

/////Create character/////
export const createChara = async (data) => {
  if (!data.name || data.name == "") {
    throw new Error("INVALID_NAME");
  }
  if (data.class === "WARRIOR") {
    data.turnsLeft = 20;
  }
  if (data.class === "EXPLORER") {
    data.items = ["Map"];
  }
  try {
    const character = await Character.create(data);
    return character;
  } catch (err) {
    throw new Error("INVALID_CREDENTIALS");
  }
};

/////Find Character/////
export const findChara = async (chara: String, ID) => {
  try {
    if(chara === 'ALL'){
      return await Character.find({ owner: ID });
    } return await Character.find( { $and: [{ name: chara }, { owner: ID }]});
  } catch (err) {
    throw new Error("NOT_FOUND");
  }
};