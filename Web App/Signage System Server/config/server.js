const   express       = require("express");
const   bodyParser      = require("body-parser");
const   app = express();

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Routes
app.use('/panel', require('../routes/configurationPanel'));
app.use('/dashboard', require('../routes/dashboard'));
app.use('/jenkins', require('../routes/jenkins'));
app.use('/sonar', require('../routes/sonar'));


// Start server
const server = app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});


//Finish server
exports.closeServer = function(){
  server.close();
};
