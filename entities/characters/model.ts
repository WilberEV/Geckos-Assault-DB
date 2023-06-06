import mongoose from "mongoose";

const CharaSchema = new mongoose.Schema(
  {
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
      type: String,
      required: true,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const Character = mongoose.model("Character", CharaSchema);

export default Character;
