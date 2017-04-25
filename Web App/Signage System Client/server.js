var express = require('express');
var methodOverride = require('method-override');
var bodyParser  = require('body-parser');
var compression = require('compression');


var app = express();


app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/hello', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

app.use(express.static(__dirname + '/public'))
  app.use('*', (_, res) => res.sendFile(__dirname + '/public/index.html'))


const PORT = process.env.PORT || 8000
app.listen(PORT, _ => console.log('listening' + PORT))
