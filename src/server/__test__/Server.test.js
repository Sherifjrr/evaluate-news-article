import "babel-polyfill";
const request = require("supertest");
import { app } from "../index";

describe("Test the server", () => {
  test("testing redirect to the main page", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
