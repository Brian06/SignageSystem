const jenkinsapi = require('jenkins-api');
const jenkinsServices = require('./jenkinsServices');

exports.hello = function(req, res){
    var jenkins = jenkinsapi.init("http://bsalazar-as:paramore100@jenkinsmain/view/SJO/");

    jenkins.job_info('SJO-BANCA', function(err, data) {
      if (err){ return console.log(err); }
      res.send(data);
    });

    /*jenkins.last_build_info('SJO-BANCA/job/Avantica VisordeErrores_Dev', function(err, data) {
      if (err){ return res.send(err); }
      res.send(data);
    });*/

}



exports.getProjectBuild = function(req, res){
  jenkinsServices.getBuild().then(data => {
    res.send(data);
  })
  .catch(function (err) {
      res.status(500).send(err.message);
  });
}
