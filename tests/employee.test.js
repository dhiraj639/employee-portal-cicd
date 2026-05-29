const request = require("supertest");
const app = require("../src/app");

describe("Employee API", () => {

    test("GET /employees", async () => {

        const response =
            await request(app).get("/employees");

        expect(response.statusCode).toBe(200);
    });

});