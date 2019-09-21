const orm = require("../config/orm.js");
const burger = {

  selectAll : (callback) => {

    orm.selectAll("burgers", (results)=>{
      callback(results);
    });

  },

  insertOne : function( vals, callback){

    orm.insertOne("burgers", ["burger_name", "devoured"], [vals, false],callback)
  },

  updateOne : (cols, vals, condition, callback) =>{


    console.log("Executing Update One Model");

    orm.updateOne("burgers", cols, vals, condition, (result)=>{
      console.log("Executing Second Declared CallBack");
      callback(result);
    });

  }

}; 
module.exports = burger;