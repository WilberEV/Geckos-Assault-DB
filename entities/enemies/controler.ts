import Enemy from "./model.js";

/////Create Enemy/////
export const createEnemy = async (data) => {
  try {
    const location = await Enemy.create(data);
    return location;
  } catch (err) {
    throw new Error("INVALID_DATA");
  }
};

/////Find Enemy/////
export const findEnemy = async (ID, stratum, type) => {
  try {
      return await Enemy.findOne( { $and: [{ ID: ID }, { stratum: stratum }, { type: type }]});
  } catch (err) {
    throw new Error("NOT_FOUND");
  }
};
