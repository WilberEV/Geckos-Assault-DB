import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import config from "../config.js";
import User from "../../entities/users/model.js";
export const seedUsers = async (count) => {
    let testUsers = [];
    for (let i = 0; i < count; i++) {
        const randomUser = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: await bcrypt.hash("Junio.2023", config.HASH_ROUNDS),
            role: "USER",
        };
        testUsers.push(randomUser);
    }
    return await User.insertMany(testUsers);
};
//# sourceMappingURL=seeders.js.map