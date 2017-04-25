const levelup = require('levelup');

//Get the dashboard integration data
exports.getData = function(req, res) {
console.log("Get dashboard data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  db.get('Dashboard', function (err, value) {
    if (err){
      db.close();
      res.status(500).send(err.message);
    }
    db.close();
    res.send(value);
  })
};

//Save the dashboard integration data
exports.saveData = function(req, res) {
  console.log("Save dashboard data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  console.log(req.body);
  db.put(
    'Dashboard',
    {
        username  : req.body.username,
        password  : req.body.password,
        server    : req.body.server,
        database  : req.body.database

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
