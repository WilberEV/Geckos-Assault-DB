import Items from "./model.js";


/////Create Item/////
export const createLocation = async (data) => {
    try {
      const location = await Items.create(data);
      return location;
    } catch (err) {
      throw new Error("INVALID_DATA");
    }
  };

/////Find Item/////
export const findLocation = async (object) => {
    try {
        return await Items.findOne({name: object});
    } catch (err) {
      throw new Error("NOT_FOUND");
    }
  };
  