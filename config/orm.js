//Import mysql connection
let connection = require("../config/connection.js");
let tableName = "burgers";


const orm =  {
    selectAll : (tableName, cb) => {
        let queryStatement  = `SELECT * FROM ${tableName};`;
        connection.query(queryStatement, (err, result) => {
            if(err) throw err;
            cb(result)
        });
},
};

module.exports = orm;


//Create methods for selectAll(), insertOne(), updateOne(), then export the orm object in module.exports.




