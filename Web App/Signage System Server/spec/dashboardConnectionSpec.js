const dashboardConecction = require("../dashboard/dashboardConecction.js");

describe("Asynchronous specs", function() {

  beforeEach(function(done) {

   });

  describe("/getbuild", function() {
   it("response is diferent to null", function() {
     return new Promise(function (resolve, reject){
       dashboardConecction.createConnection()
        .then(resp => {
          
            expect(value).toBeGreaterThan(0);
        });
     });

   });

   afterEach(function() {

    });

});
