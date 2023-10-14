import { User, Users } from "../models/users";

const users = new Users();

describe("User Model Unit Test", () => {
    it("There is an indexing method", () => {
        expect(users.index).toBeDefined();
    });

    it("There is a create method", () => {
        expect(users.create).toBeDefined();
    });

    it("There is an indexing method return user", async () => {
        const result = await users.index("Admin");
        const expectData: User = {
            user_name: "Admin",
            first_name: "John",
            last_name: "Wick",
            user_role: "admin",
            password:
                "$2b$10$L1o3f5sqRfZqUYxvjRbmW.SD7YnQv/SJQta/6HGYBUrFzmUPRXs6y",
            id: 1,
        };

        expect(result).toEqual(expectData);
    });

    it("show method should return a new user", async () => {
        const result = await users.create({
            user_name: "user2",
            password: "$2b$10$L1o3f5sqRfZqUYxvjRbmW.SD7YnQv/SJQta/6HGYBUrFzmUPRXs6y",
            first_name: "John",
            last_name: "Cena",
            user_role: 'user'
        });
        expect(result).toEqual({
            user_name: "user2",
            password: "$2b$10$L1o3f5sqRfZqUYxvjRbmW.SD7YnQv/SJQta/6HGYBUrFzmUPRXs6y", // password123
            first_name: "John",
            last_name: "Cena",
            user_role: 'user',
            id: 3
        });
    });
});
