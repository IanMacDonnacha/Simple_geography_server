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

describe("/countries", () => {
  test("GET - Should get response of country dependant on the id of that country", async () => {
    const response = await request(app).get("/countries/1");
    expect(response.body).toEqual({
      country: "France",
      language: "French",
      id: 1,
    });
    expect(response.status).toBe(200);
  });
});
