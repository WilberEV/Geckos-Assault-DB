import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Item = mongoose.model("Item", ItemSchema);

export default Item;
