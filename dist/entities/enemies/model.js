import mongoose from "mongoose";
const EnemySchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    stratum: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["FOE", "BOSS"],
    },
    stats: {
        type: Object,
        required: true,
        default: {
            "HP": Number,
            "Attack": Number,
            "Defense": Number,
            "EXP": Number
        },
    },
    IMG: {
        type: String,
        required: true,
    }
}, { versionKey: false, timestamps: true });
const User = mongoose.model("Enemy", EnemySchema);
export default User;
//# sourceMappingURL=model.js.map