const levelup = require('levelup')

//Get the sonar integration data
exports.getData = function(req, res) {
console.log("Get sonar data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  db.get('Sonar', function (err, value) {
    if (err){
      db.close();
      res.status(500).send(err.message);
    }
    db.close();
    res.send(value);
  })
};

//Save the sonar integration data
exports.saveData = function(req, res) {
  console.log("Save sonar data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  console.log(req.body);
  db.put(
    'Sonar',
    {
        username  : req.body.username,
        password  : req.body.password,
        site      : req.body.site,
        token     : req.body.token,
        accountID : req.body.accountID
    }, function (err) {
        if (err){
          db.close();
          res.status(500).send(err.message);
        }
        db.close();
        res.status(200).send({Status:'Good'});
    }
  );
};
