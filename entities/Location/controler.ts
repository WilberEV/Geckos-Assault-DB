import Location from "./model.js";


/////Create Location/////
export const createLocation = async (data) => {
    try {
      const location = await Location.create(data);
      return location;
    } catch (err) {
      throw new Error("INVALID_DATA");
    }
  };

/////Find Location/////
export const findLocation = async (X, Y) => {
    try {
        return await Location.find( { $and: [{ xCoordinate: X }, { yCoordinate: Y }]});
    } catch (err) {
      throw new Error("NOT_FOUND");
    }
  };
  