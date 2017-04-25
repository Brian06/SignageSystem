const dashboardConnection = require('./dashboardConnection');

exports.getProjects = function(){
    console.log("Get Projects");

    let projects = new Promise(function(resolve, reject){
      dashboardConnection.createConnection().then(con  => {
        return dashboardConnection.createQuery(con,"select nombre from proyecto where estado = 'A'");
      }).then(data =>{
          resolve(data);
      })
      .catch(function (err) {
          console.log(err);
          reject(err);
      });
    });

    return projects;
}
