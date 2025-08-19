const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  it("should return ok json", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
