const levelup = require('levelup')
const sql = require('mssql');
const Promise = require('promise');

//Create Connection
exports.createConnection = () => {

  const SQLConnect = new Promise((resolve, reject) => {

    const getLocalData  = new Promise((resolve, reject) => {
      const db = levelup('./dataBase/config2',{ valueEncoding: 'json' });
      db.get('Dashboard', function (err, value) {
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
        dataBaseConfig = {
            server:   value.server,
            database: value.database,
            user:     value.username,
            password: value.password
        }
        connection = new sql.Connection(dataBaseConfig);
        resolve(connection);
    });
  });

  return SQLConnect;
}


//DataBase Query
exports.createQuery = function(conn,query){

    let queryData = new Promise(function(resolve, reject){
          conn.connect().then(function () {
              var req = new sql.Request(conn);
              req.query(query).then(function (data) {
                  conn.close();
                  resolve(data);
              })
              .catch(function (err) {
                  console.log(err);
                  conn.close();
                  reject(err);
              });
          })
          .catch(function (err) {
              console.log(err);
              reject(err);
          });
    });
    return queryData;
}


//Finish Connection
exports.finishConnection = function(connection){
    console.log("Finish Connection");

    connection.close();
}
