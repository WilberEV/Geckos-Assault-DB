import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required: false,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
    stats: {
      type: Object,
      required: false,
      default: {
        "Level": 1,
        "HP": {
          "MAX": 35,
          "Current": 35
        },
        "Attack": 20,
        "Defense": 20,
        "Charisma": 999,
        "EXP": 0
      },
    },
    items: {
      type: Array,
      required: false,
      default: [],
    },
    area: {
      type: Number,
      required: false,
      default: 0
    },
    stratum: {
      type: Number,
      required: false,
      default: 0
    }
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
