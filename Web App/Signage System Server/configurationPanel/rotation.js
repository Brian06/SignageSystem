const levelup = require('levelup')

//Get the rotation data
exports.getData = function(req, res) {
console.log("Get rotation data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  db.get('Rotation', function (err, value) {
    if (err){
      db.close();
      res.status(500).send(err.message);
    }
    db.close();
    res.send(value);
  })
};

//Save the rotation data
exports.saveData = function(req, res) {
  console.log("Save rotation data");
  const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
  console.log(req.body);
  db.put(
    'Rotation',
    {
        seconds         : req.body.seconds,
        projectsforPage  : req.body.projectsforPage
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
