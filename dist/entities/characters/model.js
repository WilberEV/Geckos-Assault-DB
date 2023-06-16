import mongoose from "mongoose";
const CharaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
        enum: ["EXPLORER", "WARRIOR", "MAGE"],
    },
    turnsLeft: {
        type: Number,
        required: true,
        default: 15,
    },
    turnsPlayed: {
        type: Number,
        required: true,
        default: 0,
    },
    sprite: {
        type: String,
        required: true,
    },
    triggeredEvents: {
        type: Array,
        required: true,
        default: [],
    },
    items: {
        type: Array,
        required: true,
        default: [],
    },
    xCoordinate: {
        type: Number,
        required: true,
        default: 0,
    },
    yCoordinate: {
        type: Number,
        required: true,
        default: 0,
    },
    owner: {
        type: String,
        required: true,
        ref: "User",
    },
}, { versionKey: false, timestamps: true });
const Character = mongoose.model("Character", CharaSchema);
export default Character;
//# sourceMappingURL=model.js.map