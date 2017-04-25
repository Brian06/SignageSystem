const dashboardServices = require('./dashboardServices');

exports.hello = function(req, res){
    res.send("Hello Dashboard");
}
/*
exports.getProjectCommercialStatus = function(req, res){
  res.send("Get Commercial Status");
}

exports.getProjectExecutionStatus = function(req, res){
  res.send("Get Execution Status");
}

exports.getProjectColleagues = function(req, res){
  res.send("Get Project Colleagues");
}

exports.getProjectDescription = function(req, res){
  res.send("Get Project Description");
}*/

exports.getProjects = function(req, res){
  dashboardServices.getProjects().then(data =>{
    res.send(data);
  })
  .catch(function (err) {
      res.status(500).send(err.message);
  });
}
