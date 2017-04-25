
exports.hello = function(req, res){
    res.send("Hello Sonar");
}

exports.getProjectCoverage = function(req, res){
  res.send("Get Coverage");
}
