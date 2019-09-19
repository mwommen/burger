//Import mysql connection
let connection = require("../config/connection.js");
let tableName = "burgers";


let orm {
    selectAll : (tableName,callback) => {
        let queryStatement  = `SELECT * FROM ${tableName};`;

        connection.query(queryStatement, err, result) => {
            if(err) throw err;
            callback(result)
            
        }

    
},



