import mongoose from "mongoose";
const LocationSchema = new mongoose.Schema({
    xCoordinate: {
        type: Number,
        required: true,
    },
    yCoordinate: {
        type: Number,
        required: true,
    },
    events: {
        type: Boolean,
        required: true,
    },
    description: {
        type: Array,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
    answer: {
        type: Boolean,
    },
    effect: {
        type: Array,
    },
    hints: {
        type: String,
    },
}, { versionKey: false, timestamps: true });
const Location = mongoose.model("Location", LocationSchema);
export default Location;
//# sourceMappingURL=model.js.map