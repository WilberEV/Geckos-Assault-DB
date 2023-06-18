import Character from "./model.js";
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
    }
    catch (err) {
        throw new Error("INVALID_CREDENTIALS");
    }
};
/////Find Character/////
export const findChara = async (chara, ID) => {
    try {
        if (chara === 'ALL') {
            return await Character.find({ owner: ID });
        }
        return await Character.find({ $and: [{ name: chara }, { owner: ID }] });
    }
    catch (err) {
        throw new Error("NOT_FOUND");
    }
};
/////Update Character/////
export const modifyChara = async (data, chara, ID) => {
    try {
        return await Character.findOneAndUpdate({ $and: [{ name: chara }, { owner: ID }] }, {
            turnsLeft: data.turnsLeft,
            turnsPlayed: data.turnsPlayed,
            triggeredEvents: data.triggeredEvents,
            items: data.items,
            xCoordinate: data.xCoordinate,
            yCoordinate: data.yCoordinate,
        }, { new: true });
    }
    catch (err) {
        throw new Error("NOT_FOUND");
    }
};
/////Delete Character/////
export const deleteChara = async (chara, ID) => {
    try {
        return await Character.findOneAndDelete({ $and: [{ name: chara }, { owner: ID }] });
    }
    catch (err) {
        throw new Error("NOT_FOUND");
    }
};
//# sourceMappingURL=controler.js.map