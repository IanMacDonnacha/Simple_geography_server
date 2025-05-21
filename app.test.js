const request = require("supertest");
const app = require("./app.js");

describe("/continents", () => {
  test("GET - all continents from /continets", async () => {
    const response = await request(app).get("/continents");
    // console.log(response);
    expect(response.body).toEqual({
      continents: [
        "Asia",
        "Africa",
        "Europe",
        "North America",
        "South America",
        "Antarctica",
        "Australia",
      ],
    });
    expect(response.status).toBe(200);
  });
});
