const connection = require("../config/connection.js");
const tableName = "burgers";



//Create methods for selectAll(), insertOne(), updateOne(), then export the orm object in module.exports.
const orm = {

    selectAll : (tableName,callback) => {
  
      let queryStatement = `SELECT * FROM ${tableName};`;
  
      connection.query(queryStatement, (err, result)=>{
        if (err) throw err;
        callback(result);
      });
  
    },
  
    insertOne: (tableName, cols, vals, callback) => {
  
      let queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
  
      connection.query(queryStatement, vals, (err, result) => {
        if (err) throw err;
        console.log("Sucesfully Added");
        callback(result);
      });
  
    },
  
    updateOne : (tableName, cols, vals, condition, callback) =>{
  
      let queryStatement = `UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}`;
  
      connection.query(queryStatement, vals, (err, result) => {
        if (err) throw err;
        console.log("Sucesfully Updated");
        console.log("Executing Third Declared CallBack");
        callback(result);
      });
  
    }
  
  }
  module.exports = orm;















  
// const orm =  {
//     selectAll : (tableName, cb) => {
//         let queryStatement  = `SELECT * FROM ${tableName};`;
//         connection.query(queryStatement, (err, result) => {
//             if(err) throw err;
//             cb(result)
//         });
// },
// };

// module.exports = orm;
