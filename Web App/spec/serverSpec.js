const request = require("request");
const server = require("../config/server.js");
const baseUrl = "http://localhost:3000/";

describe("Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello from the server!", function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(body).toBe("Hello from the server!");
        server.closeServer();
        done();
      });
    });
  });
});
