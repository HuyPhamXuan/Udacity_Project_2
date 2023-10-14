import { app } from "../server";
import supertest from "supertest";

const request = supertest(app);

describe("The Unit Test endpoint", () => {
    it("Test case login success", async () => {
        const response = await request.post("/api/user/login").send({
            user_name: "userTest",
            password: "password123",
        });
        expect(response.statusCode).toEqual(200);
    });

    it("Test case login fail", async () => {
        const response = await request.post("/api/user/login").send({
            user_name: "user",
            password: "password1234",
        });
        expect(response.statusCode).toEqual(400);
    });

    it("Test case signup failed", async () => {
        const response = await request.post("/api/user/signup").send({
            first_name: "John",
            last_name: "Wick",
        });
        expect(response.statusCode).toEqual(400);
    });

    it("Test case signup success", async () => {
        const response = await request.post("/api/user/signup").send({
            user_name: "userTest",
            password: "password123",
            first_name: "John",
            last_name: "Wick",
        });
        expect(response.statusCode).toEqual(200);
    });

    it("Test case not found", async () => {
        const response = await request.get("/");
        expect(response.statusCode).toEqual(404);
    });

    it("Test case get product List", async () => {
        const response = await request.get("/api/products");
        expect(response.statusCode).toEqual(200);
    });

    it("Test case get product by id", async () => {
        const response = await request.get("/api/products/1");
        expect(response.statusCode).toEqual(200);
    });

    it("Test case get product by id", async () => {
        const response = await request.get("/api/products?category=Television");
        expect(response.statusCode).toEqual(200);
    });

    it("Test case create product fail", async () => {
        const response = await request
            .post("/api/products")
            .set({
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2OTcyNzU3NzB9.hGWVu5Cqqbt1FfqBx06q0sbud1xXVtvp-5wjU5-_F0o",
            })
            .send({
                name: "product 1",
                price: 29,
            });
        expect(response.statusCode).toEqual(401);
    });

    it("Test case create product by admin ", async () => {
        const response = await request
            .post("/api/products")
            .set({
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2OTcyNzU3NzB9.hGWVu5Cqqbt1FfqBx06q0sbud1xXVtvp-5wjU5-_F0o",
            })
            .send({
                name: "product 2",
                price: 30.5,
            });
        expect(response.statusCode).toEqual(200);
    });

    it("Test case get order by user", async () => {
        const response = await request
            .get("/api/orders")
            .set({
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2OTcyNzU3NzB9.hGWVu5Cqqbt1FfqBx06q0sbud1xXVtvp-5wjU5-_F0o",
            })
        expect(response.statusCode).toEqual(200);
    });


});
