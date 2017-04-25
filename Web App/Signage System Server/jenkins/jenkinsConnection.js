const jenkinsapi = require('jenkins-api');
const levelup = require('levelup');
const sql = require('mssql');
const Promise = require('promise');

//Create Connection
exports.createConnection = () => {

const jenkinsConnect = new Promise((resolve, reject) => {

  const getLocalData  = new Promise((resolve, reject) => {
    const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
    db.get('Jenkins', function (err, value) {
      if (err){
        db.close();
        console.log("error");
        reject(err);
      }
      else{
        db.close();
        resolve(value);
      }
    });
  });

  getLocalData.then((value) => {
    const username = value.username;
    const password = value.password;
    const site     = value.site;
    //const token    = value.token;

    const jenkins = jenkinsapi.init("http://"+username+":"+password+"@"+site);
    resolve(jenkins);
    });
  });

  return jenkinsConnect;
}


//Get Project Build
exports.getBuild = (con) => {

const build = new Promise((resolve, reject) => {

  con.all_jobs(function(err, data) {
    if (err){
      reject(err);
    }
    resolve(data);
  });

});

return build;

}
