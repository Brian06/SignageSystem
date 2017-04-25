const jenkinsConnection = require('./jenkinsConnection');

exports.getBuild = function(){
  console.log("Get Projects Jenkins");

  let build = new Promise(function(resolve, reject){

    jenkinsConnection.createConnection().then(con => {
      return jenkinsConnection.getBuild(con);
    }).then(data => {
      resolve(data);
    })
    .catch(function (err) {
        console.log(err);
        reject(err);
  });
  });
  return build;

}
