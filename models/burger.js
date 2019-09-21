// const orm  = require('../config/orm');

// const burger = {
//     selectAll: function(cb) {
//         orm.selectAll('burgers', cb);

//     }
// },

// // The variables cols and vals are arrays.
// insertOne : (cols, vals, callback) => {

//   // Execute orm Function to Post Data into Database
//   orm.insertOne("burgers", cols, vals, (result)=>{
//     console.log("This is inserting one burger");
//     callback(result);
//   });

// },

// updateOne : (cols, vals, condition, callback) =>{


//   console.log("Executing Update One Model");

//   orm.updateOne("burgers", cols, vals, condition, (result)=>{
//     console.log("Executing Second Declared CallBack");
//     callback(result);
//   });

// }; 

// module.exports = burger;





const orm = require("../config/orm.js");




const burger = {

  selectAll : (callback) => {

    orm.selectAll("burgers", (results)=>{
      callback(results);
    });

  },

  // The variables cols and vals are arrays.
  insertOne : function( vals, callback){

    // Execute orm Function to Post Data into Database
    orm.insertOne("burgers", ["burger_name", "devoured"], [vals, false],callback)
  },

  updateOne : (cols, vals, condition, callback) =>{


    console.log("Executing Update One Model");

    orm.updateOne("burgers", cols, vals, condition, (result)=>{
      console.log("Executing Second Declared CallBack");
      callback(result);
    });

  }




}; // End of Burger Object



/////////////////////////////////////////////// /*Exports*/ //////////////////////////////////////////////////////////
module.exports = burger;