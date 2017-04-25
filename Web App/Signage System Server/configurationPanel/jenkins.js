const levelup = require('levelup')

//Get the jenkins integration data
exports.getData = function(req, res) {
  console.log("Get jenkins data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  db.get('Jenkins', function (err, value) {
    if (err){
      db.close();
      res.status(500).send(err.message);
    }
    db.close();
    res.send(value);
  })
};

//Save the jenkins integration data
exports.saveData = function(req, res) {
  console.log("Save jenkins data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  console.log(req.body);
  db.put(
    'Jenkins',
    {
        username  : req.body.username,
        password  : req.body.password,
        site      : req.body.site,
        token     : req.body.token
    }, function (err) {
        if (err){
          db.close();
          res.status(500).send(err.message);
        }
        db.close();
        res.status(200).jsonp({Status:'Good'});
    }
  );
};
